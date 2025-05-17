/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Carousel } from "@/components/Carousel";
import Table, { Column } from "@/components/Table/Table";
import CodeBlock from "@/components/CodeBlock/CodeBlock";

interface TableData {
  id: number;
  prop: string;
  type: string;
  default: string;
  description: string;
}

export default function CarouselPage() {
  const columns: Column<TableData>[] = [
    {
      key: "prop",
      title: "Prop",
      dataIndex: "prop",
    },
    {
      key: "type",
      title: "Type",
      dataIndex: "type",
    },
    {
      key: "default",
      title: "Default",
      dataIndex: "default",
    },
    {
      key: "description",
      title: "Description",
      dataIndex: "description",
    },
  ];

  const data: TableData[] = [
    {
      id: 1,
      prop: "children",
      type: "React.ReactNode[]",
      default: "-",
      description: "Array of slides to display",
    },
    {
      id: 2,
      prop: "autoPlay",
      type: "boolean",
      default: "true",
      description: "Enable automatic slide transition",
    },
    {
      id: 3,
      prop: "interval",
      type: "number",
      default: "5000",
      description: "Time between automatic transitions in milliseconds",
    },
    {
      id: 4,
      prop: "showArrows",
      type: "boolean",
      default: "true",
      description: "Show navigation arrows",
    },
    {
      id: 5,
      prop: "showDots",
      type: "boolean",
      default: "true",
      description: "Show navigation dots",
    },
    {
      id: 6,
      prop: "infinite",
      type: "boolean",
      default: "true",
      description: "Enable infinite loop",
    },
    {
      id: 7,
      prop: "animation",
      type: '"slide" | "fade" | "zoom" | "flip" | "cube"',
      default: '"slide"',
      description: "Animation type for transitions",
    },
    {
      id: 8,
      prop: "showCaption",
      type: "boolean",
      default: "false",
      description: "Show slide captions",
    },
    {
      id: 9,
      prop: "captionPosition",
      type: '"top" | "bottom" | "left" | "right" | "center" | "overlay"',
      default: '"bottom"',
      description: "Position of slide captions",
    },
    {
      id: 10,
      prop: "showThumbnails",
      type: "boolean",
      default: "false",
      description: "Show thumbnail navigation",
    },
    {
      id: 11,
      prop: "thumbnailPosition",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"bottom"',
      description: "Position of thumbnails",
    },
    {
      id: 12,
      prop: "showProgress",
      type: "boolean",
      default: "false",
      description: "Show progress bar",
    },
    {
      id: 13,
      prop: "showFullscreen",
      type: "boolean",
      default: "false",
      description: "Show fullscreen toggle button",
    },
    {
      id: 14,
      prop: "showCounter",
      type: "boolean",
      default: "false",
      description: "Show slide counter",
    },
    {
      id: 15,
      prop: "newsStyle",
      type: "boolean",
      default: "false",
      description: "Enable news-style layout",
    },
    {
      id: 16,
      prop: "overlay",
      type: "boolean",
      default: "false",
      description: "Show overlay on slides",
    },
    {
      id: 17,
      prop: "overlayOpacity",
      type: "number",
      default: "0.5",
      description: "Opacity of the overlay",
    },
    {
      id: 18,
      prop: "transitionSpeed",
      type: "number",
      default: "500",
      description: "Transition speed in milliseconds",
    },
  ];

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      caption: "Beautiful Mountain Landscape",
    },
    {
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      caption: "Serene Forest Scene",
    },
    {
      image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
      caption: "Peaceful Lake View",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Carousel</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          A versatile carousel component with multiple animation types,
          navigation options, and customization features.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Multiple animation types (slide, fade, zoom, flip, cube)</li>
          <li>Customizable captions and positions</li>
          <li>Thumbnail navigation</li>
          <li>Progress bar and slide counter</li>
          <li>Fullscreen mode</li>
          <li>News-style layout</li>
          <li>Customizable overlay</li>
          <li>Touch and keyboard navigation</li>
          <li>Responsive design</li>
          <li>Accessibility features</li>
        </ul>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Examples</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Basic Carousel</h3>
          <div className="border rounded-lg p-4">
            <Carousel>
              {slides.map((slide, index) => (
                <div key={index} className="relative h-[400px]">
                  <img
                    src={slide.image}
                    alt={slide.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <CodeBlock
            code={`<Carousel>
  {slides.map((slide, index) => (
    <div key={index} className="relative h-[400px]">
      <img
        src={slide.image}
        alt={slide.caption}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</Carousel>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Fade Animation with Captions</h3>
          <div className="border rounded-lg p-4">
            <Carousel
              animation="fade"
              showCaption={true}
              captionPosition="overlay"
              showProgress={true}
              showCounter={true}
            >
              {slides.map((slide, index) => (
                <div key={index} className="relative h-[400px]">
                  <img
                    src={slide.image}
                    alt={slide.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold">{slide.caption}</h3>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <CodeBlock
            code={`<Carousel
  animation="fade"
  showCaption={true}
  captionPosition="overlay"
  showProgress={true}
  showCounter={true}
>
  {slides.map((slide, index) => (
    <div key={index} className="relative h-[400px]">
      <img
        src={slide.image}
        alt={slide.caption}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold">{slide.caption}</h3>
      </div>
    </div>
  ))}
</Carousel>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">News Style with Thumbnails</h3>
          <div className="border rounded-lg p-4">
            <Carousel
              newsStyle={true}
              showThumbnails={true}
              thumbnailPosition="bottom"
              showFullscreen={true}
              overlay={true}
              overlayOpacity={0.3}
            >
              {slides.map((slide, index) => (
                <div key={index} className="relative h-[400px]">
                  <img
                    src={slide.image}
                    alt={slide.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="px-2 py-1 bg-red-600 text-white text-sm font-semibold rounded">
                      Featured
                    </span>
                    <h3 className="text-2xl font-bold mt-2">{slide.caption}</h3>
                    <p className="mt-2 text-sm">
                      Click to read more about this story
                    </p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <CodeBlock
            code={`<Carousel
  newsStyle={true}
  showThumbnails={true}
  thumbnailPosition="bottom"
  showFullscreen={true}
  overlay={true}
  overlayOpacity={0.3}
>
  {slides.map((slide, index) => (
    <div key={index} className="relative h-[400px]">
      <img
        src={slide.image}
        alt={slide.caption}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <span className="px-2 py-1 bg-red-600 text-white text-sm font-semibold rounded">
          Featured
        </span>
        <h3 className="text-2xl font-bold mt-2">{slide.caption}</h3>
        <p className="mt-2 text-sm">Click to read more about this story</p>
      </div>
    </div>
  ))}
</Carousel>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Cube Animation</h3>
          <div className="border rounded-lg p-4">
            <Carousel
              animation="cube"
              showCaption={true}
              captionPosition="center"
              showProgress={true}
              transitionSpeed={800}
            >
              {slides.map((slide, index) => (
                <div key={index} className="relative h-[400px]">
                  <img
                    src={slide.image}
                    alt={slide.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-white text-center">
                      {slide.caption}
                    </h3>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <CodeBlock
            code={`<Carousel
  animation="cube"
  showCaption={true}
  captionPosition="center"
  showProgress={true}
  transitionSpeed={800}
>
  {slides.map((slide, index) => (
    <div key={index} className="relative h-[400px]">
      <img
        src={slide.image}
        alt={slide.caption}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h3 className="text-3xl font-bold text-white text-center">
          {slide.caption}
        </h3>
      </div>
    </div>
  ))}
</Carousel>`}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <Table columns={columns} data={data} bordered size="middle" />
      </div>
    </div>
  );
}
