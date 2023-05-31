import { Row, Col } from "react-bootstrap";
import Product from "../Product";
import { useEffect } from "react";
import { listProducts } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Message from "../Message";
import ProductCarousel from '../../components/ProductCarousel'

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;
  
  
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      
      <ProductCarousel/>
      <h1 className="text-center">Latest Products</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default HomeScreen;