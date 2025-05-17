"use client";
import React, { useState } from "react";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";
import Modal from "@/components/Modal/Modal";
import Button from "@/components/Button/Button";

export default function ModalDocs() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenWithFooter, setIsOpenWithFooter] = useState(false);
  const [isOpenWithCustomSize, setIsOpenWithCustomSize] = useState(false);
  const [isOpenWithAnimation, setIsOpenWithAnimation] = useState(false);
  const [isOpenWithPosition, setIsOpenWithPosition] = useState(false);
  const [isOpenWithDraggable, setIsOpenWithDraggable] = useState(false);
  const [isOpenWithCustomBackdrop, setIsOpenWithCustomBackdrop] =
    useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Modal
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A versatile modal dialog component with support for various sizes,
          positions, animations, and interactive features.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Basic Usage
        </h2>
        <Card>
          <div className="space-y-4">
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              title="Basic Modal"
            >
              <p>This is a basic modal dialog.</p>
            </Modal>
          </div>
        </Card>
        <CodeBlock
          code={`const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>Open Modal</Button>
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Basic Modal"
>
  <p>This is a basic modal dialog.</p>
</Modal>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          With Footer
        </h2>
        <Card>
          <div className="space-y-4">
            <Button onClick={() => setIsOpenWithFooter(true)}>
              Open Modal with Footer
            </Button>
            <Modal
              isOpen={isOpenWithFooter}
              onClose={() => setIsOpenWithFooter(false)}
              title="Modal with Footer"
              footer={
                <div className="flex justify-end gap-2">
                  <Button
                    variant="secondary"
                    onClick={() => setIsOpenWithFooter(false)}
                  >
                    Cancel
                  </Button>
                  <Button onClick={() => setIsOpenWithFooter(false)}>
                    Confirm
                  </Button>
                </div>
              }
            >
              <p>This modal has a footer with action buttons.</p>
            </Modal>
          </div>
        </Card>
        <CodeBlock
          code={`<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal with Footer"
  footer={
    <div className="flex justify-end gap-2">
      <Button variant="secondary" onClick={() => setIsOpen(false)}>
        Cancel
      </Button>
      <Button onClick={() => setIsOpen(false)}>
        Confirm
      </Button>
    </div>
  }
>
  <p>This modal has a footer with action buttons.</p>
</Modal>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Custom Size
        </h2>
        <Card>
          <div className="space-y-4">
            <Button onClick={() => setIsOpenWithCustomSize(true)}>
              Open Large Modal
            </Button>
            <Modal
              isOpen={isOpenWithCustomSize}
              onClose={() => setIsOpenWithCustomSize(false)}
              title="Large Modal"
              size="screen"
            >
              <p>This is a large modal dialog.</p>
            </Modal>
          </div>
        </Card>
        <CodeBlock
          code={`<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Large Modal"
  size="lg"
>
  <p>This is a large modal dialog.</p>
</Modal>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Animation
        </h2>
        <Card>
          <div className="space-y-4">
            <Button onClick={() => setIsOpenWithAnimation(true)}>
              Open Animated Modal
            </Button>
            <Modal
              isOpen={isOpenWithAnimation}
              onClose={() => setIsOpenWithAnimation(false)}
              title="Animated Modal"
              animation="zoom"
              animationDuration="slow"
            >
              <p>This modal has a zoom animation effect.</p>
            </Modal>
          </div>
        </Card>
        <CodeBlock
          code={`<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Animated Modal"
  animation="zoom"
  animationDuration="slow"
>
  <p>This modal has a zoom animation effect.</p>
</Modal>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Custom Position
        </h2>
        <Card>
          <div className="space-y-4">
            <Button onClick={() => setIsOpenWithPosition(true)}>
              Open Top Modal
            </Button>
            <Modal
              isOpen={isOpenWithPosition}
              onClose={() => setIsOpenWithPosition(false)}
              title="Top Modal"
              position="top"
            >
              <p>This modal appears at the top of the screen.</p>
            </Modal>
          </div>
        </Card>
        <CodeBlock
          code={`<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Top Modal"
  position="top"
>
  <p>This modal appears at the top of the screen.</p>
</Modal>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Draggable Modal
        </h2>
        <Card>
          <div className="space-y-4">
            <Button onClick={() => setIsOpenWithDraggable(true)}>
              Open Draggable Modal
            </Button>
            <Modal
              isOpen={isOpenWithDraggable}
              onClose={() => setIsOpenWithDraggable(false)}
              title="Draggable Modal"
              draggable
            >
              <p>This modal can be dragged around the screen.</p>
            </Modal>
          </div>
        </Card>
        <CodeBlock
          code={`<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Draggable Modal"
  draggable
>
  <p>This modal can be dragged around the screen.</p>
</Modal>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Custom Backdrop
        </h2>
        <Card>
          <div className="space-y-4">
            <Button onClick={() => setIsOpenWithCustomBackdrop(true)}>
              Open Modal with Custom Backdrop
            </Button>
            <Modal
              isOpen={isOpenWithCustomBackdrop}
              onClose={() => setIsOpenWithCustomBackdrop(false)}
              title="Custom Backdrop Modal"
              backdropColor="rgba(0, 128, 255, 0.3)"
              backdropBlur
            >
              <p>This modal has a custom blue backdrop with blur effect.</p>
            </Modal>
          </div>
        </Card>
        <CodeBlock
          code={`<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Custom Backdrop Modal"
  backdropColor="rgba(0, 128, 255, 0.3)"
  backdropBlur
>
  <p>This modal has a custom blue backdrop with blur effect.</p>
</Modal>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          API Reference
        </h2>
        <Card>
          <Table
            columns={[
              { key: "prop", title: "Prop", dataIndex: "prop" },
              { key: "type", title: "Type", dataIndex: "type" },
              { key: "default", title: "Default", dataIndex: "default" },
              {
                key: "description",
                title: "Description",
                dataIndex: "description",
              },
            ]}
            data={[
              {
                id: "isOpen",
                prop: "isOpen",
                type: "boolean",
                default: "undefined",
                description: "Controls the visibility of the modal",
              },
              {
                id: "onClose",
                prop: "onClose",
                type: "() => void",
                default: "undefined",
                description: "Callback function when modal is closed",
              },
              {
                id: "title",
                prop: "title",
                type: "string",
                default: "undefined",
                description: "Title text for the modal",
              },
              {
                id: "children",
                prop: "children",
                type: "React.ReactNode",
                default: "undefined",
                description: "Content of the modal",
              },
              {
                id: "size",
                prop: "size",
                type: '"xs" | "sm" | "md" | "lg" | "xl" | "full" | "auto"',
                default: '"md"',
                description: "Size of the modal",
              },
              {
                id: "position",
                prop: "position",
                type: '"center" | "top" | "bottom" | "left" | "right"',
                default: '"center"',
                description: "Position of the modal on screen",
              },
              {
                id: "closeOnEsc",
                prop: "closeOnEsc",
                type: "boolean",
                default: "true",
                description: "Whether to close modal on ESC key press",
              },
              {
                id: "closeOnOverlayClick",
                prop: "closeOnOverlayClick",
                type: "boolean",
                default: "true",
                description: "Whether to close modal when clicking outside",
              },
              {
                id: "showCloseButton",
                prop: "showCloseButton",
                type: "boolean",
                default: "true",
                description: "Whether to show the close button",
              },
              {
                id: "animation",
                prop: "animation",
                type: '"fade" | "slide" | "zoom" | "bounce" | "flip" | "none"',
                default: '"fade"',
                description: "Animation type for modal",
              },
              {
                id: "animationDuration",
                prop: "animationDuration",
                type: '"fast" | "normal" | "slow"',
                default: '"normal"',
                description: "Duration of the animation",
              },
              {
                id: "draggable",
                prop: "draggable",
                type: "boolean",
                default: "false",
                description: "Whether the modal can be dragged",
              },
              {
                id: "resizable",
                prop: "resizable",
                type: "boolean",
                default: "false",
                description: "Whether the modal can be resized",
              },
              {
                id: "backdropColor",
                prop: "backdropColor",
                type: "string",
                default: '"rgba(0, 0, 0, 0.5)"',
                description: "Custom background color for the modal backdrop",
              },
              {
                id: "backdropBlur",
                prop: "backdropBlur",
                type: "boolean",
                default: "false",
                description: "Whether to apply blur effect to backdrop",
              },
              {
                id: "footer",
                prop: "footer",
                type: "React.ReactNode",
                default: "undefined",
                description: "Footer content of the modal",
              },
            ]}
            bordered
            size="small"
            showHeader
          />
        </Card>
      </section>
    </div>
  );
}
