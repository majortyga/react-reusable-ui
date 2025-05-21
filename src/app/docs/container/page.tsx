"use client";
import React from "react";
import Container from "@/components/Container/Container";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";
import Card from "@/components/Card/Card";

const ContainerDocs = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold mb-8 text-white">
        Container Component Documentation
      </h1>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Basic Usage</h2>
        <p className="text-gray-300">
          A simple container with default settings
        </p>
        <div className="bg-[#11235a]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
          <Container>
            <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 text-white">
              Basic Container Content
            </div>
          </Container>
        </div>
        <CodeBlock
          code={`import { Container } from "@majordev/react-reusable-ui";

<Container>
  <div>Basic Container Content</div>
</Container>`}
          language="tsx"
        />
      </section>

      {/* With Background and Blur */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">
          With Background and Blur
        </h2>
        <p className="text-gray-300">
          Container with background color, blur effect, and border
        </p>
        <div className="bg-[#11235a]/50 backdrop-blur-sm rounded-xl p-6">
          <Container
            withBackground
            withBlur
            blurIntensity="md"
            withBorder
            backgroundOpacity={30}
            borderOpacity={30}
          >
            <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 text-white">
              Container with Background and Blur
            </div>
          </Container>
        </div>
        <CodeBlock
          code={`import { Container } from "@majordev/react-reusable-ui";

<Container
  withBackground
  withBlur
  blurIntensity="md"
  withBorder
  backgroundOpacity={30}
  borderOpacity={30}
>
  <div>Container with Background and Blur</div>
</Container>`}
          language="tsx"
        />
      </section>

      {/* Custom Max Width and Padding */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">
          Custom Max Width and Padding
        </h2>
        <p className="text-gray-300">
          Container with custom max width and padding configuration
        </p>
        <div className="bg-[#11235a]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
          <Container
            maxWidth="4xl"
            padding={{ x: "2rem", y: "3rem" }}
            withBackground
            backgroundOpacity={20}
          >
            <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 text-white">
              Container with Custom Max Width and Padding
            </div>
          </Container>
        </div>
        <CodeBlock
          code={`import { Container } from "@majordev/react-reusable-ui";

<Container
  maxWidth="4xl"
  padding={{ x: "2rem", y: "3rem" }}
  withBackground
  backgroundOpacity={20}
>
  <div>Container with Custom Max Width and Padding</div>
</Container>`}
          language="tsx"
        />
      </section>

      {/* Custom Border Radius */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">
          Custom Border Radius
        </h2>
        <p className="text-gray-300">
          Container with custom border radius and styling
        </p>
        <div className="bg-[#11235a]/50 backdrop-blur-sm  p-6">
          <Container
            roundedSize="3xl"
            withBorder
            padding={{ x: "2rem", y: "2rem" }}
          >
            <div className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 text-white">
              Container with Custom Border Radius
            </div>
          </Container>
        </div>
        <CodeBlock
          code={`import { Container } from "@majordev/react-reusable-ui";

<Container
  roundedSize="3xl"
  withBorder
  borderOpacity={40}
  padding={{ x: "2rem", y: "2rem" }}
>
  <div>Container with Custom Border Radius</div>
</Container>`}
          language="tsx"
        />
      </section>

      {/* Props Documentation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Props</h2>
        <div className="bg-[#11235a]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
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
                  description: "Content to be rendered inside the container",
                },
                {
                  id: 2,
                  name: "maxWidth",
                  type: "string",
                  default: '"7xl"',
                  description:
                    "Maximum width of the container (sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl, full, none)",
                },
                {
                  id: 3,
                  name: "padding",
                  type: "Object",
                  default: '{ x: "1rem", y: "1rem" }',
                  description:
                    "Padding configuration (x, y, top, right, bottom, left)",
                },
                {
                  id: 4,
                  name: "center",
                  type: "boolean",
                  default: "true",
                  description: "Whether to center the container horizontally",
                },
                {
                  id: 5,
                  name: "withBackground",
                  type: "boolean",
                  default: "false",
                  description: "Whether to add a background color",
                },
                {
                  id: 6,
                  name: "backgroundOpacity",
                  type: "number",
                  default: "50",
                  description: "Background color opacity (0-100)",
                },
                {
                  id: 7,
                  name: "withBorder",
                  type: "boolean",
                  default: "false",
                  description: "Whether to add a border",
                },
                {
                  id: 8,
                  name: "borderOpacity",
                  type: "number",
                  default: "50",
                  description: "Border color opacity (0-100)",
                },
                {
                  id: 9,
                  name: "withBlur",
                  type: "boolean",
                  default: "false",
                  description: "Whether to add backdrop blur effect",
                },
                {
                  id: 10,
                  name: "blurIntensity",
                  type: "string",
                  default: '"sm"',
                  description: "Blur intensity (sm, md, lg, xl, 2xl, 3xl)",
                },
                {
                  id: 11,
                  name: "rounded",
                  type: "boolean",
                  default: "true",
                  description: "Whether to add rounded corners",
                },
                {
                  id: 12,
                  name: "roundedSize",
                  type: "string",
                  default: '"xl"',
                  description:
                    "Border radius size (sm, md, lg, xl, 2xl, 3xl, full)",
                },
                {
                  id: 13,
                  name: "className",
                  type: "string",
                  default: "-",
                  description: "Additional classes for the container",
                },
                {
                  id: 14,
                  name: "wrapperClassName",
                  type: "string",
                  default: "-",
                  description: "Additional classes for the inner wrapper",
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

export default ContainerDocs;
