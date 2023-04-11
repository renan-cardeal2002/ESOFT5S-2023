import { Request, Response } from "express";
import productService from "./product.service";

class ProductController {
  async create(req: Request, res: Response) {
    await productService.createProductList(req.body);
    return res.status(201).send();
  }

  async list(req: Request, res: Response) {
    const productList = await productService.listProducts();
    return res.status(200).send(productList);
  }

  async findProduct(req: Request, res: Response) {
    const product = await productService.findProduct(req.body.id);
    return res.status(200).send(product);
  }

  async deleteProduct(req: Request, res: Response) {
    const product = await productService.remove(req.body.id);
    return res.status(200).send(product);
  }
}

export default new ProductController();
