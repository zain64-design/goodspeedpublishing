import type { GenreItem } from "@/app/_types";
import businessImg from "@public/images/genres/business.webp";
import fictionImg from "@public/images/genres/fiction.webp";
import childrenImg from "@public/images/genres/children.webp";
import romanceImg from "@public/images/genres/romance.webp";
import sciFictionImg from "@public/images/genres/sci-fi.webp";
import mysteryImg from "@public/images/genres/mystery.webp";
import adultImg from "@public/images/genres/adult.webp";
import thrillerImg from "@public/images/genres/thriller.webp";
import comicsImg from "@public/images/genres/comics.webp";
import christianImg from "@public/images/genres/christian.webp";
import horrorImg from "@public/images/genres/horror.webp";
import actionImg from "@public/images/genres/action.webp";
import nonFictionImg from "@public/images/genres/non-fiction.webp";

export const GenresData: GenreItem[] = [
  {
    id: 1,
    title: "Business Books",
    category: "business-books",
    info: "For insights that drive results and lead industries, we provide a strategic, data-backed space to sharpen your professional authority. We help you balance actionable expertise with a narrative that commands attention, ensuring your strategies are clear, authoritative, and exactly what the modern marketplace is looking for. From disruptive startup guides to seasoned leadership blueprints, we help you turn your expertise into a benchmark for success.",
    thumbnail: businessImg,
  },
  {
    id: 2,
    title: "Fiction",
    category: "fiction",
    info: 'Real life is fine, but made-up worlds are much better. If you’re building a sprawling empire or just a messy neighborhood drama, we’re here to help you lie professionally. We’ll take your "what if" and turn it into a "must-read" that keeps people up way past their bedtime.',
    thumbnail: fictionImg,
  },
  {
    id: 3,
    title: "Children's",
    category: "children's",
    info: "Writing for kids is serious business mostly because they are the toughest critics on the planet. Be it bedtime stories or middle-grade adventures, we help you create characters that kids love and parents don’t mind reading for the millionth time. Let’s make some magic.",
    thumbnail: childrenImg,
  },
  {
    id: 4,
    title: "Romance",
    category: "romance",
    info: 'We’re suckers for a good "enemies-to-lovers" trope. We help you capture that butterflies-in-the-stomach feeling. Your readers are looking for a happily-ever-after, and we’re here to make sure the sparks fly on every single page. Tissue boxes sold separately.',
    thumbnail: romanceImg,
  },
  {
    id: 5,
    title: "Science Fiction",
    category: "sci-fi",
    info: 'Lasers, portals, and existential dread about AI? Count us in. We help you build worlds that feel grounded even if they’re lightyears away. Let’s take your "science" and add just enough "fiction" to make it legendary.',
    thumbnail: sciFictionImg,
  },
  {
    id: 6,
    title: "Mystery",
    category: "mystery",
    info: "We love a good puzzle as much as you do. We’ll help you scatter the breadcrumbs, plant the red herrings, and hide the truth in plain sight until that big, shocking reveal.",
    thumbnail: mysteryImg,
  },
  {
    id: 7,
    title: "Adult Books",
    category: "adult-books",
    info: 'For stories that are a little more "after dark," we provide a professional, judgment-free space to polish your steamier side. We help you balance the heat with a great plot, ensuring your spicy scenes are high-quality, tasteful, and exactly what your audience is craving. No blushing here, we promise.',
    thumbnail: adultImg,
  },
  {
    id: 8,
    title: "Thriller",
    category: "thriller",
    info: 'If your manuscript is the literary equivalent of a heart attack, you’re in the right place. We specialize in those "just one more chapter" vibes that lead to sunrise.',
    thumbnail: thrillerImg,
  },
  {
    id: 9,
    title: "Comics",
    category: "comics",
    info: 'They say a picture is worth a thousand words, but we think the right "POW!\'" or "ZAP!" is priceless. Whether you’re building a superhero universe or a quirky indie memoir, we help you marry bold art with sharp dialogue. Let’s make some panels that actually pop off the page.',
    thumbnail: comicsImg,
  },
  {
    id: 10,
    title: "Christian Books",
    category: "christian-books",
    info: "For stories that nourish the soul and uplift the spirit, we provide a grace-filled, intentional space to refine your faith based message. From quiet moments of reflection to epic journeys of faith, we are here to help your light shine through every page. We help you balance powerful testimony with compelling storytelling, ensuring your message is impactful, biblically sound, and resonates deeply with your readers.",
    thumbnail: christianImg,
  },
  {
    id: 11,
    title: "Horror",
    category: "horror",
    info: "We want to help you give people nightmares. Seriously. If your story features creepy basements, psychological twists, or things that go bump in the night, we’re ready to get weird with you.",
    thumbnail: horrorImg,
  },
  {
    id: 12,
    title: "Action",
    category: "action",
    info: "If your story involves high-speed chases, narrow escapes, and things blowing up in the background (while the hero doesn't look back, obviously), we’re your crew. We help you pack every page with enough adrenaline to make readers forget to breathe. Safety goggles are not required, but highly recommended.",
    thumbnail: actionImg,
  },
  {
    id: 13,
    title: "Non-Fiction",
    category: "Non-Fiction",
    info: 'Real life is weirder than fiction, and we’re here to help you prove it. We organize your expertise into a narrative that’s actually engaging. Let’s make "learning stuff" feel like a total blast.',
    thumbnail: nonFictionImg,
  },
];
