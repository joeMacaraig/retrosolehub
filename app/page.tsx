import { SneakerCard } from "@/components/SneakerCard";

const Home = async () => {
  const response = await fetch("http://localhost:3000/api/featured");
  const data = await response.json();
  return (
    <main>
      <div>Home</div>
      <div className="flex items-center gap-4 overflow-scroll">
        {data?.sneakers.map((item: ProductSneaker) => (
          <SneakerCard {...item} />
        ))}
      </div>
    </main>
  );
};

export default Home;
