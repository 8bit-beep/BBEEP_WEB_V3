import {SkeletonBase} from "./style.ts";
import {SkeletonProps} from "../../../types/props/skeletonProps.ts";

const Skeleton = ({ width, height, borderRadius }: SkeletonProps) => {
  return (
    <SkeletonBase
      width={width}
      height={height || '100px'}
      borderRadius={borderRadius}
    />
  )
}
export default Skeleton
