import { model, Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    nome: {
      required: true,
      type: String,
    },
    qtde: {
      required: true,
      type: Number,
    },
    preco: {
      required: true,
      type: Number,
    },
    valor_stock: {
      require: false,
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Product", ProductSchema);
