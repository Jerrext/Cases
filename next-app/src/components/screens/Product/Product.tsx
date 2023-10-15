import { FC } from 'react';
import styles from './Product.module.scss'

type ProductProps = {
  id: string;
}

const Product: FC<ProductProps> = ({id}) => {
  return (
    <div>Product {id}</div>
  )
}

export default Product