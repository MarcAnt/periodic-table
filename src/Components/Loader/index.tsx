import ContentLoader from "react-content-loader"

//for info
export const Loader = () => (
    <ContentLoader 
      speed={2}
      width={100}
      height={100}
      viewBox="0 0 100 100"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"

    >
      <rect x="0" y="0" rx="25" ry="25" width="100" height="100" />
    </ContentLoader>
)
  
//for noble gases and alkalines
export const LoaderElement = () => (
    <ContentLoader 
      speed={2}
      width={400}
      height={600}
      viewBox="0 0 400 500"
      backgroundColor="#cccbcb"
      foregroundColor="#ecebeb"

    >
      <rect x="0" y="0" rx="20" ry="20" width="80" height="500" />
    </ContentLoader>
)
  
export const LoaderDiffuse = () => (
    <ContentLoader 
      speed={2}
      width={700}
      height={700}
      viewBox="0 0 700 700"
      backgroundColor="#cccbcb"
      foregroundColor="#ecebeb"

    >
      <rect x="0" y="100" rx="20" ry="20" width="700" height="300" />
    </ContentLoader>
  )
  
