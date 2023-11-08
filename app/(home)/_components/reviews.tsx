import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ReviewsSection = () => {
  return (
    <section className="bg-slate-50 px-4 py-24">
      <div className="container flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-bold text-foreground md:w-1/2">
          Cerita pemilik olshop #jadimudah dengan SmartSeller
        </h2>

        <Button
          asChild
          variant="link"
          className="group rounded-none p-0 no-underline hover:no-underline"
        >
          <Link href="/" aria-label="Baca pengalaman mereka di Seller Story">
            Baca pengalaman mereka di Seller Story
            <ArrowRight className="ml-4 h-4 w-4 -translate-x-2 transition duration-300 group-hover:translate-x-0" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ReviewsSection;
