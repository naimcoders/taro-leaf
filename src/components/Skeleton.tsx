import React from "react";
import cx from "classnames";
import { Skeleton as NextUISkeleton, SkeletonProps } from "@nextui-org/react";

interface ISkeletonProps extends SkeletonProps {}
const Skeleton: React.FC<ISkeletonProps> = ({ className, ...props }) => {
  return (
    <>
      {[1, 2, 3].map((num) => (
        <NextUISkeleton
          {...props}
          key={num}
          className={cx("rounded-lg", className)}
        >
          <div className="h-20 rounded-lg bg-default-300"></div>
        </NextUISkeleton>
      ))}
    </>
  );
};

export default Skeleton;
