import { PlusCircle } from "lucide-react";
import ProductsView from "../components/ProductsView/ProductsView";
import PrimaryButton from "../components/ui/PrimaryButton";

const Products = () => {
  return (
    <>
      <section className="flex gap-20 ">
        <ProductsView />
        <PrimaryButton classname={"p-2 fixed bottom-4 right-5"}>
            <PlusCircle size={50} />
        </PrimaryButton>
      </section>
    </>
  );
};

export default Products;
