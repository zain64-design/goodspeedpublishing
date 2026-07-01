"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
const IntlTelInput = dynamic(() => import("@intl-tel-input/react"), {
  ssr: false,
});
import "intl-tel-input/styles";
import CustomInput from "@/app/_components/ui/CustomInput";
import CustomTextarea from "@/app/_components/ui/CustomTextarea";
import CustomBtn from "@/app/_components/ui/CustomBtn";
import type { ContactFormValues, GeoData } from "@/app/_types";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  phone: Yup.string().trim().required("Phone number is required"),
  email: Yup.string()
    .trim()
    .email("Invalid email address")
    .required("Email is required"),
  about: Yup.string()
    .trim()
    .min(10, "Please provide more details (minimum 10 char)")
    .required("Please tell us about your book"),
});

export default function ContactFormInner() {
  const router = useRouter();
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [geoData, setGeoData] = useState<GeoData>({
    ip: "",
    city: "",
    country: "",
    zip_code: "",
  });

  useEffect(() => {
    const fetchGeo = async () => {
      try {
        const d = await fetch("/api/geo").then((r) => r.json());
        setGeoData(d);
      } catch (err) {
        console.error("Geo fetch failed:", err);
      }
    };
    if (document.readyState === "complete") {
      fetchGeo();
    } else {
      window.addEventListener("load", fetchGeo, { once: true });
      return () => window.removeEventListener("load", fetchGeo);
    }
  }, []);

  const formik = useFormik<ContactFormValues>({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      about: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitStatus("idle");
      try {
        const formData = new FormData();
        formData.append("name", values.name.trim());
        formData.append("phone", values.phone.trim());
        formData.append("email", values.email.trim());
        formData.append("message", values.about.trim());
        formData.append("ip", geoData.ip);
        formData.append("city", geoData.city);
        formData.append("country", geoData.country);
        formData.append("zip_code", geoData.zip_code);

        const res = await fetch("/api/contact", {
          method: "POST",
          body: formData,
        });

        if (res.ok) {
          resetForm();
          setSubmitStatus("success");
          setTimeout(() => router.push("/thank-you"), 500);
        } else {
          setSubmitStatus("error");
        }
      } catch {
        setSubmitStatus("error");
      } finally {
        setSubmitting(false);
      }
    },
  });

  const inputLabelClass =
    "font-medium text-xs sm:text-base md:text-lg text-grey-text-200 tracking-[1.6px] mb-2 uppercase";
  const inputClass =
    "h-[35px] sm:h-[45px] md:h-[64px] w-full p-[10px] sm:p-[15px] bg-white rounded-0 text-base text-black-text-100 tracking-normal focus:outline-none focus:shadow-none border-b-1 border-grey-100 placeholder:text-(--text-white) placeholder:capitalize";
  const errorClass = "text-red-500 text-xs mt-1";

  return (
    <form
      onSubmit={formik.handleSubmit}
      noValidate
      className="shadow-light-shadow w-full rounded-[25px] bg-white p-4 sm:p-6 md:rounded-[42px] md:p-8 lg:p-10 xl:px-10 xl:pt-12 xl:pb-5 2xl:px-14.5 2xl:pt-17 2xl:pb-7.5"
    >
      <div className="flex flex-row flex-wrap gap-x-7.25 gap-y-2 sm:gap-y-6 md:gap-y-10">
        <div className="w-full md:flex-1">
          <CustomInput
            label="Name"
            type="text"
            name="name"
            autoComplete="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            labelClassName={inputLabelClass}
            inputClassName={inputClass}
          />
          {formik.touched.name && formik.errors.name && (
            <p className={errorClass}>{formik.errors.name}</p>
          )}
        </div>

        <div className="flex w-full flex-col md:flex-1">
          <label className={inputLabelClass}>Phone</label>
          <input type="hidden" name="phone" value={formik.values.phone} />
          <IntlTelInput
            initialCountry="us"
            loadUtils={() => import("intl-tel-input/utils")}
            onChangeValidity={(isValid) => {
              if (!isValid && formik.values.phone) {
                formik.setFieldError("phone", "Enter a valid phone number");
              }
            }}
            onChangeNumber={(num) => {
              formik.setFieldValue("phone", num);
              formik.setFieldTouched("phone", true, false);
            }}
            inputProps={{
              name: "phone",
              id: "phone",
              className: inputClass,
              onBlur: () => formik.setFieldTouched("phone", true),
            }}
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className={errorClass}>{formik.errors.phone}</p>
          )}
        </div>

        <div className="w-full">
          <CustomInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            labelClassName={inputLabelClass}
            inputClassName={inputClass}
          />
          {formik.touched.email && formik.errors.email && (
            <p className={errorClass}>{formik.errors.email}</p>
          )}
        </div>

        <div className="w-full">
          <CustomTextarea
            label="Tell us about your book"
            name="about"
            rows={4}
            value={formik.values.about}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            wrapperClassName="w-full"
            labelClassName={inputLabelClass}
            textareaClassName="w-full p-[10px] sm:p-[15px] bg-white rounded-0 text-base text-black-text-100 tracking-normal focus:outline-none focus:shadow-none border-b-1 border-grey-100 placeholder:text-(--text-white) placeholder:capitalize"
          />
          {formik.touched.about && formik.errors.about && (
            <p className={errorClass}>{formik.errors.about}</p>
          )}
        </div>

        <div className="flex w-full flex-col gap-3">
          <CustomBtn
            type="submit"
            isLoading={formik.isSubmitting}
            disabled={formik.isSubmitting}
            buttonClass="btn-mid mt-4! md:mt-0! xl:rounded-[24px] inline-flex items-center h-[50px] xl:h-[70px] 2xl:h-[93px] max-w-full flex-row-reverse justify-center gap-[11px] text-base md:text-lg 2xl:text-[23px]"
            label="Send Message"
          />

          {submitStatus === "success" && (
            <div className="flex items-center justify-center gap-2 text-green-600">
              <FaCircleCheck size={18} />
              <p className="text-sm">
                Your message has been sent successfully!
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex items-center justify-center gap-2 text-red-500">
              <FaCircleXmark size={18} />
              <p className="text-sm">Something went wrong. Please try again.</p>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
