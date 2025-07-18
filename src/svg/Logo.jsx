import React from "react";

const Logo = (props) => {
  return (
    <>
      <h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          style={{
            height: 24,
          }}
          viewBox="0 0 256 40"
          {...props}
        >
          <title>{"F1 75"}</title>
          <g clipPath="url(#a)">
            <path
              fill="#E10600"
              d="m39.882 22.709-17.213 16.7H.713L28.029 12.3C38.184 2.25 43.08.6 60.395.6h68.393l-14.844 14.534H62.351c-12.936 0-15.69.999-22.473 7.576h.004Zm71.846-5.255H62.663c-13.03 0-15.067.998-20.978 6.904L26.635 39.41h20.358l4.843-4.843c3.202-3.202 4.63-3.505 11.081-3.505h35.204l13.607-13.607Zm5.312 21.955L155.951.6H131.78L92.97 39.41h24.07ZM133.381 39.41c-1.225 0-2.244-.409-3.052-1.23-.813-.82-1.217-1.827-1.217-3.024 0-1.196.404-2.203 1.209-3.015.804-.813 1.819-1.221 3.044-1.221s2.235.408 3.036 1.229c.8.82 1.2 1.827 1.2 3.024 0 1.196-.396 2.203-1.192 3.015-.797.813-1.803 1.221-3.028 1.221Zm-.024-7.823c-1.003 0-1.844.347-2.523 1.043-.675.695-1.015 1.536-1.015 2.526 0 .99.34 1.832 1.015 2.527.675.695 1.516 1.043 2.523 1.043 1.006 0 1.843-.344 2.522-1.035.675-.691 1.015-1.532 1.015-2.527 0-.994-.34-1.839-1.015-2.534-.675-.696-1.516-1.043-2.522-1.043Zm-.829 4.277v1.665h-.934v-4.71h1.771c.61 0 1.071.114 1.378.344.307.227.461.57.461 1.027 0 .457-.061.797-.186 1.019-.125.222-.335.4-.635.538l.886 1.786h-.983l-.804-1.665h-.95l-.004-.004Zm-.016-2.317v1.585h.95c.291 0 .501-.06.626-.186.13-.125.194-.327.194-.606 0-.53-.331-.793-.998-.793h-.772Z"
            />
            <path
              fill="currentColor"
              d="M182.806 27.192h31.307l2.324-2.32h-31.306L209.472.6h45.164l-12.249 12.217h-27.231l-2.325 2.316h14.889c4.803 0 6.744.74 8.15 2.486 2.28 2.863.186 7.091-2.918 10.924-3.396 4.172-6.647 7.034-10.964 8.732-4.56 1.795-9.314 2.134-14.796 2.134h-36.635l12.249-12.217ZM167.57 39.41 206.48.6h-47.541l-12.25 12.22h23.415l-26.661 26.59h24.127Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M.09.002h255v40H.09z" />
            </clipPath>
          </defs>
        </svg>
      </h1>
    </>
  );
};

export default Logo;
