import ProductCard from "@/Components/ProductCard";


const Home = () => {
  return (
    <main className="container mx-auto mt-8">
      <section className="flex flex-wrap justify-center gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </main>
  );
};

export default Home;

