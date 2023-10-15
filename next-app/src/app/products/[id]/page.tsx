import Product from "@/components/screens/Product";
import { Metadata } from "next";

type ProductProps = {
  params: {
    id: string;
  }
}

export const generateMetadata = async ({params: {id}}: ProductProps): Promise<Metadata> => {
  return {
    title: `Product ${id}`
  }
}

const ProductPage = ({params: {id}}: ProductProps) => {
  return <Product id={id} />
}

export default ProductPage