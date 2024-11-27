import styles from "./Loading.module.css";

export default function LoadingInner() {
  const { loadingInnerContainer, dot1, dot2, dot3, loadingDotSpinner } = styles;
  return (
    <div className={loadingInnerContainer}>
      <div className={`${loadingDotSpinner} ${dot1}`}></div>
      <div className={`${loadingDotSpinner} ${dot2}`}></div>
      <div className={`${loadingDotSpinner} ${dot3}`}></div>
    </div>
  );
}
