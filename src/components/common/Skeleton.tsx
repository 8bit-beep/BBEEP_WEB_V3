import { SkeletonProps } from "../../types/props/skeletonProps";

const Skeleton = ({ width, height, borderRadius, margin }: SkeletonProps) => {
    return (
        <div
            className={`
        bg-gradient-to-r from-[#f0f0f0] via-[#e0e0e0] to-[#f0f0f0] 
        bg-[length:400px_100%]
      `}
            style={{
                width: width || "100%",
                height: height || "16px",
                borderRadius: borderRadius || "4px",
                animation: "shimmer 1.2s ease-in-out infinite",
                backgroundPosition: "-200px 0",
                marginBottom: margin && "16px",
            }}
        />
    );
};

export default Skeleton;
