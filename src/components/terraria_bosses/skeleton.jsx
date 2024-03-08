import React from "react"
import ContentLoader from "react-content-loader"

const BossesSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={340}
    height={480}
    viewBox="0 0 340 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="33" y="38" rx="15" ry="15" width="203" height="139" /> 
    <rect x="28" y="212" rx="5" ry="5" width="210" height="29" /> 
    <rect x="71" y="255" rx="5" ry="5" width="127" height="30" /> 
    <rect x="50" y="319" rx="5" ry="5" width="170" height="28" /> 
    <rect x="76" y="353" rx="5" ry="5" width="114" height="22" /> 
    <rect x="67" y="381" rx="5" ry="5" width="133" height="24" /> 
    <rect x="36" y="410" rx="5" ry="5" width="198" height="21" /> 
    <rect x="85" y="438" rx="5" ry="5" width="91" height="21" />
  </ContentLoader>
)

export default BossesSkeleton