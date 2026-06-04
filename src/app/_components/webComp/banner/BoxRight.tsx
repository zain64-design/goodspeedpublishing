import ImageComp from '@/app/_components/ui/Image'
import { getImageProps } from 'next/image'
import RightBoxThumb from "@public/images/right-box-thumb.webp"
import BrEl1 from "@public/images/br-el-1.webp"
import BrEl2 from "@public/images/br-el-2.webp"
import BrEl3 from "@public/images/br-el-3.webp"
import { getBackgroundImage } from '@/app/_utils/getBackgroundImage'

type Props = {}

export default function BoxRight({}: Props) {
  const { props: { srcSet: srcSet1 } } = getImageProps({ alt: '', width: 472, height: 269, src: BrEl1, quality: 50 })
  const { props: { srcSet: srcSet2 } } = getImageProps({ alt: '', width: 172, height: 160, src: BrEl2, quality: 50 })
  const { props: { srcSet: srcSet3 } } = getImageProps({ alt: '', width: 774, height: 201, src: BrEl3, quality: 50 })
  return (
    <div className="bg-secondary-lt rounded-[48px] bg-no-repeat bg-[position:top_left,top_right,left_bottom] bg-[size:472px_269px,172px_160px,774px_201px] overflow-hidden" style={{
        backgroundImage: `${getBackgroundImage(srcSet1)}, ${getBackgroundImage(srcSet2)}, ${getBackgroundImage(srcSet3)}`
      }}>
        <ImageComp src={RightBoxThumb} width={612} height={719} preload={true} className="max-w-full max-h-179.75 mx-auto block object-contain" alt="customer" />
    </div>
  )
}