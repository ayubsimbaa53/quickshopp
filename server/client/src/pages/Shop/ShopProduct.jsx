import React from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import Items from "./Items";
import PaginatedItems from "./Pagination";

const ShopProduct = () => {
  const { products, loading, error } = useSelector(
    (state) => state.shopProduct
  );

  return (
    // reuse css class
    <section className="featured container-div">
      <div className="featured__container">
        <div className="featured__products grid">
          <>
            {loading ? (
              <Spinner
                style={{ marginLeft: "50%", marginTop: "5%" }}
                animation="border"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : error ? (
              <h2
                style={{
                  color: "#333",
                  fontWeight: "500",
                  textAlign: "center",
                  paddingBottom: "1.5rem",
                }}
              >
                {error}
              </h2>
            ) : (
              <>
                <Items />
              </>
            )}

            {products?.result === 0 && (
              <h4 className="featured__products__notFound">
                No Products Found.
              </h4>
            )}
          </>
        </div>
        <PaginatedItems items={products?.products} itemsPerPage={8} />
      </div>
    </section>
  );
};

export default ShopProduct;
