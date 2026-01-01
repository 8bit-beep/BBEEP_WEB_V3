import { SkeletonProps } from "../../types/props/elements/skeletonProps.ts";

const Skeleton = (props: SkeletonProps) => {
    return (
        <div
            className={`
        bg-gradient-to-r from-[#f0f0f0] via-[#e0e0e0] to-[#f0f0f0] 
        bg-[length:400px_100%] rounded-xl
      `}
            style={{
                width: props.width || "100%",
                height: props.height || "16px",
                borderRadius: props.borderRadius || "4px",
                animation: "shimmer 1.2s ease-in-out infinite",
                backgroundPosition: "-200px 0",
                marginBottom: props.margin && "16px",
            }}
        />
    );
};

export default Skeleton;
