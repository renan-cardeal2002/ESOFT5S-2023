import { ProductType } from "./types/product.types";
import ProductModel from "./product.schema";

class ProductService {
  async createProductList(data: ProductType) {
    const createdProduct = await ProductModel.create(data);
    return createdProduct;
  }

  async listProducts() {
    const productList = await ProductModel.find();
    return productList;
  }

  async findProduct(id) {
    const product = await ProductModel.findById(id);
    return product;
  }

  async remove(id) {
    await ProductModel.findByIdAndDelete(id);
  }
}

export default new ProductService();
