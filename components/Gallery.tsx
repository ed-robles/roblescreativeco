import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Gallery = () => {
    return (
        <Carousel className="w-full max-w-xs text-center text-[#ff3300]">
            <CarouselContent>
                <CarouselItem>
                    <div className="p-1">
                        <Card>
                            <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                                <span className="text-4xl font-semibold text-[#ff3300]">Brand Identity</span>
                                <span className="mt-2">Build a strong brand identity that resonates with your customers.</span>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="p-1">
                        <Card>
                            <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                                <span className="text-4xl font-semibold text-[#ff3300]">Social Media Campaign</span>
                                <span className="mt-2">Engage your audience with creative and impactful social media campaigns.</span>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="p-1">
                        <Card>
                            <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                                <span className="text-4xl font-semibold text-[#ff3300]">E-Commerce</span>
                                <span className="mt-2">Start selling online with a custom e-commerce website.</span>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default Gallery;