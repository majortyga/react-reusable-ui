"use client";
import React from "react";
import Grid, { Col } from "@/components/Grid/Grid";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";
import Card from "@/components/Card/Card";

const GridDocs = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold mb-8 text-white">
        Grid Component Documentation
      </h1>

      {/* Basic Grid Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Basic Grid</h2>
        <p className="text-gray-300">
          A simple responsive grid with default settings
        </p>
        <div className="bg-[#11235a]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
          <Grid>
            <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 text-white">
              Item 1
            </div>
            <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 text-white">
              Item 2
            </div>
            <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 text-white">
              Item 3
            </div>
            <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 text-white">
              Item 4
            </div>
          </Grid>
        </div>
        <CodeBlock
          code={`import { Grid } from "@majordev/react-reusable-ui";

<Grid>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Grid>`}
          language="tsx"
        />
      </section>

      {/* Basic 8-Column Grid Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">
          Basic 8-Column Grid
        </h2>
        <p className="text-gray-300">
          A simple 8-column grid with equal-width columns
        </p>
        <div className="bg-[#11235a]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
          <Grid columns={{ xs: 8 }} gap={{ x: "1rem", y: "1rem" }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 text-white"
              >
                Column {item}
              </div>
            ))}
          </Grid>
        </div>
        <CodeBlock
          code={`import { Grid } from "@majordev/react-reusable-ui";

<Grid columns={{ xs: 8 }} gap={{ x: "1rem", y: "1rem" }}>
  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
    <div key={item}>
      Column {item}
    </div>
  ))}
</Grid>`}
          language="tsx"
        />
      </section>

      {/* Advanced Column and Row Spanning */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Advanced Spanning</h2>
        <p className="text-gray-300">
          Complex grid layout with both column and row spanning
        </p>
        <div className="bg-[#11235a]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
          <Grid columns={{ xs: 2, md: 4 }} gap={{ x: "1.5rem", y: "1.5rem" }}>
            <Col span={{ xs: 2, md: 2 }} rowSpan={2}>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-full">
                <h3 className="font-medium mb-2 text-white">
                  Featured Content
                </h3>
                <p className="text-gray-300">
                  This item spans 2 columns and 2 rows
                </p>
              </div>
            </Col>
            <Col span={{ xs: 1, md: 1 }}>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
                <h3 className="font-medium mb-2 text-white">Item 2</h3>
                <p className="text-gray-300">Regular item</p>
              </div>
            </Col>
            <Col span={{ xs: 1, md: 1 }}>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
                <h3 className="font-medium mb-2 text-white">Item 3</h3>
                <p className="text-gray-300">Regular item</p>
              </div>
            </Col>
            <Col span={{ xs: 2, md: 2 }}>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
                <h3 className="font-medium mb-2 text-white">Wide Item</h3>
                <p className="text-gray-300">This item spans 2 columns</p>
              </div>
            </Col>
          </Grid>
        </div>
        <CodeBlock
          code={`import { Grid, Col } from "@majordev/react-reusable-ui";

<Grid columns={{ xs: 2, md: 4 }} gap={{ x: '1.5rem', y: '1.5rem' }}>
  <Col span={{ xs: 2, md: 2 }} rowSpan={2}>
    <div>Featured Content</div>
  </Col>
  <Col span={{ xs: 1, md: 1 }}>
    <div>Item 2</div>
  </Col>
  <Col span={{ xs: 1, md: 1 }}>
    <div>Item 3</div>
  </Col>
  <Col span={{ xs: 2, md: 2 }}>
    <div>Wide Item</div>
  </Col>
</Grid>`}
          language="tsx"
        />
      </section>

      {/* Complex Layout Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Complex Layout</h2>
        <p className="text-gray-300">
          Advanced grid layout with mixed spanning and responsive behavior
        </p>
        <div className="bg-[#11235a]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
          <Grid columns={{ xs: 2, md: 6 }} gap={{ x: "1.5rem", y: "1.5rem" }}>
            <Col span={{ xs: 2, md: 3 }} rowSpan={2}>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-full">
                <h3 className="font-medium mb-2 text-white">Main Content</h3>
                <p className="text-gray-300">
                  Large featured section spanning 3 columns and 2 rows
                </p>
              </div>
            </Col>
            <Col span={{ xs: 1, md: 1 }}>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
                <h3 className="font-medium mb-2 text-white">Side 1</h3>
                <p className="text-gray-300">Side content</p>
              </div>
            </Col>
            <Col span={{ xs: 1, md: 1 }}>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
                <h3 className="font-medium mb-2 text-white">Side 2</h3>
                <p className="text-gray-300">Side content</p>
              </div>
            </Col>
            <Col span={{ xs: 2, md: 2 }}>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
                <h3 className="font-medium mb-2 text-white">Bottom 1</h3>
                <p className="text-gray-300">Wide bottom section</p>
              </div>
            </Col>
            <Col span={{ xs: 2, md: 2 }}>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
                <h3 className="font-medium mb-2 text-white">Bottom 2</h3>
                <p className="text-gray-300">Wide bottom section</p>
              </div>
            </Col>
          </Grid>
        </div>
        <CodeBlock
          code={`import { Grid, Col } from "@majordev/react-reusable-ui";

<Grid columns={{ xs: 2, md: 6 }} gap={{ x: '1.5rem', y: '1.5rem' }}>
  <Col span={{ xs: 2, md: 3 }} rowSpan={2}>
    <div>Main Content</div>
  </Col>
  <Col span={{ xs: 1, md: 1 }}>
    <div>Side 1</div>
  </Col>
  <Col span={{ xs: 1, md: 1 }}>
    <div>Side 2</div>
  </Col>
  <Col span={{ xs: 2, md: 2 }}>
    <div>Bottom 1</div>
  </Col>
  <Col span={{ xs: 2, md: 2 }}>
    <div>Bottom 2</div>
  </Col>
</Grid>`}
          language="tsx"
        />
      </section>

      {/* Masonry Layout with Row Spanning */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">
          Masonry with Row Spanning
        </h2>
        <p className="text-gray-300">
          Masonry layout combined with row spanning for dynamic content
        </p>
        <div className="bg-[#11235a]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
          <Grid
            masonry
            columns={{ xs: 1, sm: 2, md: 3 }}
            gap={{ x: "1.5rem", y: "1.5rem" }}
          >
            <Col rowSpan={2}>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-48">
                <h3 className="font-medium mb-2 text-white">Tall Item</h3>
                <p className="text-gray-300">This item spans 2 rows</p>
              </div>
            </Col>
            <Col>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-32">
                <h3 className="font-medium mb-2 text-white">Short Item</h3>
                <p className="text-gray-300">Regular height item</p>
              </div>
            </Col>
            <Col rowSpan={3}>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-64">
                <h3 className="font-medium mb-2 text-white">Very Tall Item</h3>
                <p className="text-gray-300">This item spans 3 rows</p>
              </div>
            </Col>
            <Col>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-40">
                <h3 className="font-medium mb-2 text-white">Medium Item</h3>
                <p className="text-gray-300">Medium height item</p>
              </div>
            </Col>
          </Grid>
        </div>
        <CodeBlock
          code={`import { Grid, Col } from "@majordev/react-reusable-ui";

<Grid masonry columns={{ xs: 1, sm: 2, md: 3 }} gap={{ x: '1.5rem', y: '1.5rem' }}>
  <Col rowSpan={2}>
    <div className="h-48">Tall Item</div>
  </Col>
  <Col>
    <div className="h-32">Short Item</div>
  </Col>
  <Col rowSpan={3}>
    <div className="h-64">Very Tall Item</div>
  </Col>
  <Col>
    <div className="h-40">Medium Item</div>
  </Col>
</Grid>`}
          language="tsx"
        />
      </section>

      {/* Auto-fit with Custom Styling */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">
          Auto-fit with Custom Styling
        </h2>
        <p className="text-gray-300">
          Auto-fit grid with custom container and item styling
        </p>
        <div className="bg-[#11235a]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
          <Grid
            autoFit
            containerClassName="bg-[#0a1836]/50 rounded-xl"
            itemClassName="hover:scale-105 transition-all duration-300"
            className="gap-6"
          >
            <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
              <h3 className="font-medium mb-2 text-white">Auto Item 1</h3>
              <p className="text-gray-300">Automatically sized item</p>
            </div>
            <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
              <h3 className="font-medium mb-2 text-white">Auto Item 2</h3>
              <p className="text-gray-300">Automatically sized item</p>
            </div>
            <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
              <h3 className="font-medium mb-2 text-white">Auto Item 3</h3>
              <p className="text-gray-300">Automatically sized item</p>
            </div>
            <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
              <h3 className="font-medium mb-2 text-white">Auto Item 4</h3>
              <p className="text-gray-300">Automatically sized item</p>
            </div>
          </Grid>
        </div>
        <CodeBlock
          code={`import { Grid } from "@majordev/react-reusable-ui";

<Grid
  autoFit
  containerClassName="bg-[#0a1836]/50 rounded-xl"
  itemClassName="hover:scale-105 transition-all duration-300"
  className="gap-6"
>
  <div>Auto Item 1</div>
  <div>Auto Item 2</div>
  <div>Auto Item 3</div>
  <div>Auto Item 4</div>
</Grid>`}
          language="tsx"
        />
      </section>

      {/* Advanced Examples Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Advanced Examples</h2>

        {/* Nested Grids */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-white">Nested Grids</h3>
          <p className="text-gray-300">
            Example of nested grids with different column configurations
          </p>
          <div className="bg-[#11235a]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <Grid columns={{ xs: 1, md: 2 }} gap={{ x: "1.5rem", y: "1.5rem" }}>
              <Col>
                <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
                  <h3 className="font-medium mb-4 text-white">
                    Parent Grid Item 1
                  </h3>
                  <Grid columns={{ xs: 2 }} gap={{ x: "1rem", y: "1rem" }}>
                    <div className="bg-[#11235a] p-4 rounded-lg border border-gray-700/50 text-white">
                      Nested Item 1
                    </div>
                    <div className="bg-[#11235a] p-4 rounded-lg border border-gray-700/50 text-white">
                      Nested Item 2
                    </div>
                  </Grid>
                </div>
              </Col>
              <Col>
                <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
                  <h3 className="font-medium mb-4 text-white">
                    Parent Grid Item 2
                  </h3>
                  <Grid columns={{ xs: 3 }} gap={{ x: "1rem", y: "1rem" }}>
                    <div className="bg-[#11235a] p-4 rounded-lg border border-gray-700/50 text-white">
                      Nested Item 1
                    </div>
                    <div className="bg-[#11235a] p-4 rounded-lg border border-gray-700/50 text-white">
                      Nested Item 2
                    </div>
                    <div className="bg-[#11235a] p-4 rounded-lg border border-gray-700/50 text-white">
                      Nested Item 3
                    </div>
                  </Grid>
                </div>
              </Col>
            </Grid>
          </div>
          <CodeBlock
            code={`import { Grid, Col } from "@majordev/react-reusable-ui";

<Grid columns={{ xs: 1, md: 2 }} gap={{ x: "1.5rem", y: "1.5rem" }}>
  <Col>
    <div>
      <h3>Parent Grid Item 1</h3>
      <Grid columns={{ xs: 2 }} gap={{ x: "1rem", y: "1rem" }}>
        <div>Nested Item 1</div>
        <div>Nested Item 2</div>
      </Grid>
    </div>
  </Col>
  <Col>
    <div>
      <h3>Parent Grid Item 2</h3>
      <Grid columns={{ xs: 3 }} gap={{ x: "1rem", y: "1rem" }}>
        <div>Nested Item 1</div>
        <div>Nested Item 2</div>
        <div>Nested Item 3</div>
      </Grid>
    </div>
  </Col>
</Grid>`}
            language="tsx"
          />
        </div>

        {/* Complex Layout with Auto-fit */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-white">
            Complex Layout with Auto-fit
          </h3>
          <p className="text-gray-300">
            Auto-fit grid with dynamic sizing and custom styling
          </p>
          <div className="bg-[#11235a]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <Grid
              autoFit
              containerClassName="bg-[#0a1836]/50 rounded-xl"
              itemClassName="hover:scale-105 transition-all duration-300"
              className="gap-6"
            >
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50"
                >
                  <h3 className="font-medium mb-2 text-white">
                    Auto Item {item}
                  </h3>
                  <p className="text-gray-300">
                    This item automatically sizes based on container width
                  </p>
                </div>
              ))}
            </Grid>
          </div>
          <CodeBlock
            code={`import { Grid } from "@majordev/react-reusable-ui";

<Grid
  autoFit
  containerClassName="bg-[#0a1836]/50 rounded-xl"
  itemClassName="hover:scale-105 transition-all duration-300"
  className="gap-6"
>
  {[1, 2, 3, 4, 5, 6].map((item) => (
    <div key={item}>
      <h3>Auto Item {item}</h3>
      <p>This item automatically sizes based on container width</p>
    </div>
  ))}
</Grid>`}
            language="tsx"
          />
        </div>

        {/* Interactive Grid with Hover Effects */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-white">
            Interactive Grid with Hover Effects
          </h3>
          <p className="text-gray-300">
            Grid with interactive elements and hover effects
          </p>
          <div className="bg-[#11235a]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <Grid columns={{ xs: 2, md: 4 }} gap={{ x: "1.5rem", y: "1.5rem" }}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className="group bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 cursor-pointer hover:bg-[#11235a] transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <h3 className="font-medium mb-2 text-white group-hover:text-blue-400 transition-colors">
                      Interactive Item {item}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                      Hover to see effects
                    </p>
                  </div>
                </div>
              ))}
            </Grid>
          </div>
          <CodeBlock
            code={`import { Grid } from "@majordev/react-reusable-ui";

<Grid columns={{ xs: 2, md: 4 }} gap={{ x: "1.5rem", y: "1.5rem" }}>
  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
    <div
      key={item}
      className="group bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 cursor-pointer hover:bg-[#11235a] transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <h3 className="font-medium mb-2 text-white group-hover:text-blue-400 transition-colors">
          Interactive Item {item}
        </h3>
        <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
          Hover to see effects
        </p>
      </div>
    </div>
  ))}
</Grid>`}
            language="tsx"
          />
        </div>

        {/* Responsive Grid with Dynamic Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-white">
            Responsive Grid with Dynamic Content
          </h3>
          <p className="text-gray-300">
            Grid that adapts to different screen sizes and content types
          </p>
          <div className="bg-[#11235a]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <Grid
              columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
              gap={{ x: "1.5rem", y: "1.5rem" }}
            >
              <Col span={{ xs: 1, sm: 2 }}>
                <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-full">
                  <h3 className="font-medium mb-2 text-white">
                    Featured Content
                  </h3>
                  <p className="text-gray-300">
                    This item spans 2 columns on larger screens
                  </p>
                </div>
              </Col>
              <Col>
                <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
                  <h3 className="font-medium mb-2 text-white">Regular Item</h3>
                  <p className="text-gray-300">Standard grid item</p>
                </div>
              </Col>
              <Col>
                <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
                  <h3 className="font-medium mb-2 text-white">Regular Item</h3>
                  <p className="text-gray-300">Standard grid item</p>
                </div>
              </Col>
              <Col span={{ xs: 1, sm: 2, md: 1 }}>
                <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
                  <h3 className="font-medium mb-2 text-white">
                    Responsive Span
                  </h3>
                  <p className="text-gray-300">
                    This item changes span based on screen size
                  </p>
                </div>
              </Col>
            </Grid>
          </div>
          <CodeBlock
            code={`import { Grid, Col } from "@majordev/react-reusable-ui";

<Grid
  columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
  gap={{ x: "1.5rem", y: "1.5rem" }}
>
  <Col span={{ xs: 1, sm: 2 }}>
    <div>
      <h3>Featured Content</h3>
      <p>This item spans 2 columns on larger screens</p>
    </div>
  </Col>
  <Col>
    <div>
      <h3>Regular Item</h3>
      <p>Standard grid item</p>
    </div>
  </Col>
  <Col>
    <div>
      <h3>Regular Item</h3>
      <p>Standard grid item</p>
    </div>
  </Col>
  <Col span={{ xs: 1, sm: 2, md: 1 }}>
    <div>
      <h3>Responsive Span</h3>
      <p>This item changes span based on screen size</p>
    </div>
  </Col>
</Grid>`}
            language="tsx"
          />
        </div>
      </section>

      {/* 8-Column Grid Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">
          8-Column Grid Layout
        </h2>
        <p className="text-gray-300">
          A complex 8-column grid layout with various column and row spans
        </p>
        <div className="bg-[#11235a]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
          <Grid columns={{ xs: 8 }} gap={{ x: "1rem", y: "1rem" }}>
            <Col>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-full">
                No span
              </div>
            </Col>
            <Col>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-full">
                No span
              </div>
            </Col>
            <Col>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-full">
                No span
              </div>
            </Col>
            <Col>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-full">
                No span
              </div>
            </Col>
            <Col>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-full">
                No span
              </div>
            </Col>
            <Col>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-full">
                No span
              </div>
            </Col>
            <Col>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-full">
                No span
              </div>
            </Col>
            <Col>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-full">
                No span
              </div>
            </Col>

            <Col span={{ xs: 4 }} rowSpan={2}>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-full">
                <h3 className="font-medium mb-2 text-white">
                  Featured Content
                </h3>
                <p className="text-gray-300">Spans 4 columns and 2 rows</p>
              </div>
            </Col>
            <Col span={{ xs: 2 }}>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
                <h3 className="font-medium mb-2 text-white">Side Item 1</h3>
                <p className="text-gray-300">Spans 2 columns</p>
              </div>
            </Col>
            <Col span={{ xs: 2 }}>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
                <h3 className="font-medium mb-2 text-white">Side Item 2</h3>
                <p className="text-gray-300">Spans 2 columns</p>
              </div>
            </Col>
            <Col span={{ xs: 2 }}>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
                <h3 className="font-medium mb-2 text-white">Bottom Item 1</h3>
                <p className="text-gray-300">Spans 2 columns</p>
              </div>
            </Col>
            <Col span={{ xs: 2 }}>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
                <h3 className="font-medium mb-2 text-white">Bottom Item 2</h3>
                <p className="text-gray-300">Spans 2 columns</p>
              </div>
            </Col>
            <Col span={{ xs: 4 }} rowSpan={2}>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-full">
                <h3 className="font-medium mb-2 text-white">Wide Content</h3>
                <p className="text-gray-300">Spans 4 columns and 2 rows</p>
              </div>
            </Col>
            <Col span={{ xs: 2 }}>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
                <h3 className="font-medium mb-2 text-white">Bottom Item 3</h3>
                <p className="text-gray-300">Spans 2 columns</p>
              </div>
            </Col>
            <Col span={{ xs: 2 }}>
              <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
                <h3 className="font-medium mb-2 text-white">Bottom Item 4</h3>
                <p className="text-gray-300">Spans 2 columns</p>
              </div>
            </Col>
          </Grid>
        </div>
        <CodeBlock
          code={`import { Grid, Col } from "@majordev/react-reusable-ui";

<Grid columns={{ xs: 8 }} gap={{ x: "1rem", y: "1rem" }}>
   <Col>
      <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-full">
         No span
      </div>
    </Col>
    <Col>
    <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-full">
        No span
    </div>
    </Col>
    <Col>
      <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-full">
        No span
      </div>
    </Col>
    <Col>
        <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-full">
            No span
        </div>
    </Col>
    <Col>
        <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-full">
          No span
        </div>
    </Col>
    <Col>
        <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-full">
         No span
        </div>
    </Col>
    <Col>
        <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-full">
            No span
        </div>
    </Col>
    <Col>
        <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-full">
            No span
        </div>
    </Col>
    <Col>
        <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-full">
            No span
        </div>
    </Col>

    <Col span={{ xs: 4 }} rowSpan={2}>
        <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-full">
        <h3 className="font-medium mb-2 text-white">
            Featured Content
        </h3>
        <p className="text-gray-300">Spans 4 columns and 2 rows</p>
        </div>
    </Col>
    <Col span={{ xs: 2 }}>
        <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
            <h3 className="font-medium mb-2 text-white">Side Item 1</h3>
            <p className="text-gray-300">Spans 2 columns</p>
        </div>
    </Col>
    <Col span={{ xs: 2 }}>
        <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
            <h3 className="font-medium mb-2 text-white">Side Item 2</h3>
            <p className="text-gray-300">Spans 2 columns</p>
        </div>
    </Col>
    <Col span={{ xs: 2 }}>
        <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
            <h3 className="font-medium mb-2 text-white">Bottom Item 1</h3>
            <p className="text-gray-300">Spans 2 columns</p>
        </div>
    </Col>
    <Col span={{ xs: 2 }}>
        <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
            <h3 className="font-medium mb-2 text-white">Bottom Item 2</h3>
            <p className="text-gray-300">Spans 2 columns</p>
        </div>
    </Col>
    <Col span={{ xs: 4 }} rowSpan={2}>
        <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 h-full">
            <h3 className="font-medium mb-2 text-white">Wide Content</h3>
            <p className="text-gray-300">Spans 4 columns and 2 rows</p>
        </div>
    </Col>
    <Col span={{ xs: 2 }}>
        <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
            <h3 className="font-medium mb-2 text-white">Bottom Item 3</h3>
            <p className="text-gray-300">Spans 2 columns</p>
        </div>
    </Col>
    <Col span={{ xs: 2 }}>
        <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50">
            <h3 className="font-medium mb-2 text-white">Bottom Item 4</h3>
            <p className="text-gray-300">Spans 2 columns</p>
        </div>
    </Col>
</Grid>`}
          language="tsx"
        />
      </section>

      {/* Props Documentation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Props</h2>
        <div className="bg-[#11235a]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
          <h3 className="text-xl font-medium text-white mb-4">Grid Props</h3>
          <Card className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 overflow-x-auto max-w-[80vw]">
            <Table
              columns={[
                {
                  key: "name",
                  title: "Prop",
                  dataIndex: "name",
                  width: 200,
                },
                {
                  key: "type",
                  title: "Type",
                  dataIndex: "type",
                  width: 200,
                },
                {
                  key: "default",
                  title: "Default",
                  dataIndex: "default",
                  width: 150,
                },
                {
                  key: "description",
                  title: "Description",
                  dataIndex: "description",
                },
              ]}
              data={[
                {
                  id: 1,
                  name: "children",
                  type: "React.ReactNode",
                  default: "-",
                  description: "Child elements to be rendered in the grid",
                },
                {
                  id: 2,
                  name: "columns",
                  type: "Object",
                  default: "{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, '2xl': 6 }",
                  description:
                    "Number of columns at different breakpoints (xs, sm, md, lg, xl, 2xl)",
                },
                {
                  id: 3,
                  name: "gap",
                  type: "Object",
                  default: "{ x: '1rem', y: '1rem' }",
                  description:
                    "Gap between grid items (x for horizontal, y for vertical)",
                },
                {
                  id: 4,
                  name: "autoFit",
                  type: "boolean",
                  default: "false",
                  description:
                    "Whether to automatically fit items based on container width",
                },
                {
                  id: 5,
                  name: "autoRows",
                  type: "string",
                  default: "auto",
                  description: "Height of automatically generated rows",
                },
                {
                  id: 6,
                  name: "masonry",
                  type: "boolean",
                  default: "false",
                  description: "Whether to use masonry layout",
                },
                {
                  id: 7,
                  name: "className",
                  type: "string",
                  default: "-",
                  description: "Additional classes for the grid container",
                },
                {
                  id: 8,
                  name: "itemClassName",
                  type: "string",
                  default: "-",
                  description: "Additional classes for grid items",
                },
                {
                  id: 9,
                  name: "containerClassName",
                  type: "string",
                  default: "-",
                  description: "Additional classes for the outer container",
                },
                {
                  id: 10,
                  name: "onLayoutComplete",
                  type: "() => void",
                  default: "-",
                  description: "Callback fired when grid layout is complete",
                },
              ]}
              bordered
              size="middle"
            />
          </Card>

          <h3 className="text-xl font-medium text-white mt-8 mb-4">
            Col Props
          </h3>
          <Card className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 overflow-x-auto max-w-[80vw]">
            <Table
              columns={[
                {
                  key: "name",
                  title: "Prop",
                  dataIndex: "name",
                  width: 200,
                },
                {
                  key: "type",
                  title: "Type",
                  dataIndex: "type",
                  width: 200,
                },
                {
                  key: "default",
                  title: "Default",
                  dataIndex: "default",
                  width: 150,
                },
                {
                  key: "description",
                  title: "Description",
                  dataIndex: "description",
                },
              ]}
              data={[
                {
                  id: 1,
                  name: "children",
                  type: "React.ReactNode",
                  default: "-",
                  description: "Child elements to be rendered in the column",
                },
                {
                  id: 2,
                  name: "span",
                  type: "Object",
                  default: "-",
                  description:
                    "Column span at different breakpoints (xs, sm, md, lg, xl, 2xl)",
                },
                {
                  id: 3,
                  name: "rowSpan",
                  type: "number",
                  default: "-",
                  description: "Number of rows to span",
                },
                {
                  id: 4,
                  name: "className",
                  type: "string",
                  default: "-",
                  description: "Additional classes for the column",
                },
              ]}
              bordered
              size="middle"
            />
          </Card>
        </div>
      </section>
    </div>
  );
};

export default GridDocs;
