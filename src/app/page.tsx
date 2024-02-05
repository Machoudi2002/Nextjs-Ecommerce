import ProductCard from "@/Components/ProductCard";


const Home = () => {
  return (
    <main className="container mx-auto mt-8">
      <section className="text-center grid gap-15 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </main>
  );
};

export default Home;

