"use client";
import React, { useState } from "react";
import PinInput from "@/components/PinInput/PinInput";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Card from "@/components/Card/Card";

const PinInputDocs = () => {
  const [pin, setPin] = useState("");
  const [maskedPin, setMaskedPin] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="max-w-7xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold mb-8 text-white">
        PinInput Component Documentation
      </h1>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Basic Usage</h2>
        <p className="text-gray-300">
          A simple PIN input with default settings (4 digits)
        </p>
        <div className="bg-[#11235a]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
          <PinInput
            onChange={(value) => setPin(value)}
            onComplete={(value) => console.log("Complete:", value)}
          />
        </div>
        <CodeBlock
          code={`import { PinInput } from "@majordev/react-reusable-ui";

<PinInput
  onChange={(value) => console.log(value)}
  onComplete={(value) => console.log("Complete:", value)}
/>`}
          language="tsx"
        />
      </section>

      {/* Variants */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Variants</h2>
        <p className="text-gray-300">
          Different visual styles for the PIN input
        </p>
        <div className="bg-[#11235a]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 space-y-6">
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              Outline (Default)
            </h3>
            <PinInput variant="outline" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-white mb-2">Filled</h3>
            <PinInput variant="filled" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-white mb-2">Flushed</h3>
            <PinInput variant="flushed" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-white mb-2">Unstyled</h3>
            <PinInput variant="unstyled" />
          </div>
        </div>
        <CodeBlock
          code={`import { PinInput } from "@majordev/react-reusable-ui";

// Outline (default)
<PinInput variant="outline" />

// Filled style
<PinInput variant="filled" />

// Bottom border only
<PinInput variant="flushed" />

// No borders or background
<PinInput variant="unstyled" />`}
          language="tsx"
        />
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Sizes</h2>
        <p className="text-gray-300">
          Different size options for the PIN input
        </p>
        <div className="bg-[#11235a]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 space-y-6">
          <div>
            <h3 className="text-lg font-medium text-white mb-2">Extra Small</h3>
            <PinInput size="xs" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-white mb-2">Small</h3>
            <PinInput size="sm" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              Medium (Default)
            </h3>
            <PinInput size="md" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-white mb-2">Large</h3>
            <PinInput size="lg" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-white mb-2">Extra Large</h3>
            <PinInput size="xl" />
          </div>
        </div>
        <CodeBlock
          code={`import { PinInput } from "@majordev/react-reusable-ui";

// Extra small
<PinInput size="xs" />

// Small
<PinInput size="sm" />

// Medium (default)
<PinInput size="md" />

// Large
<PinInput size="lg" />

// Extra large
<PinInput size="xl" />`}
          language="tsx"
        />
      </section>

      {/* Masked PIN Input */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Masked PIN Input</h2>
        <p className="text-gray-300">PIN input with masking for secure input</p>
        <div className="bg-[#11235a]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
          <PinInput
            mask={true}
            onChange={(value) => setMaskedPin(value)}
            onComplete={(value) => console.log("Complete:", value)}
          />
        </div>
        <CodeBlock
          code={`import { PinInput } from "@majordev/react-reusable-ui";

<PinInput
  mask={true}
  onChange={(value) => console.log(value)}
  onComplete={(value) => console.log("Complete:", value)}
/>`}
          language="tsx"
        />
      </section>

      {/* Custom Length and Validation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">
          Custom Length and Validation
        </h2>
        <p className="text-gray-300">
          PIN input with custom length and validation pattern
        </p>
        <div className="bg-[#11235a]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
          <PinInput
            length={6}
            numbersOnly={true}
            validation={{
              pattern: /^\d{6}$/,
              message: "PIN must be 6 digits",
            }}
            error={error}
            hasError={!!error}
            onChange={(value) => {
              setError("");
              if (value.length === 6 && !/^\d{6}$/.test(value)) {
                setError("PIN must be 6 digits");
              }
            }}
          />
        </div>
        <CodeBlock
          code={`import { PinInput } from "@majordev/react-reusable-ui";

<PinInput
  length={6}
  numbersOnly={true}
  validation={{
    pattern: /^\\d{6}$/,
    message: "PIN must be 6 digits"
  }}
  error={error}
  hasError={!!error}
  onChange={(value) => {
    setError("");
    if (value.length === 6 && !/^\\d{6}$/.test(value)) {
      setError("PIN must be 6 digits");
    }
  }}
/>`}
          language="tsx"
        />
      </section>

      {/* Alphanumeric PIN */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Alphanumeric PIN</h2>
        <p className="text-gray-300">
          PIN input that accepts both letters and numbers. Try entering both
          letters and numbers in the example below.
        </p>
        <div className="bg-[#11235a]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 space-y-4">
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              Alphanumeric Input
            </h3>
            <PinInput
              length={5}
              alphanumeric={true}
              numbersOnly={false}
              placeholder="*"
              mask={false}
              onChange={(value) => console.log("Current value:", value)}
              onComplete={(value) => console.log("Complete value:", value)}
            />
          </div>
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              Letters Only
            </h3>
            <PinInput
              length={4}
              lettersOnly={true}
              numbersOnly={false}
              placeholder="*"
              mask={false}
            />
          </div>
        </div>
        <CodeBlock
          code={`import { PinInput } from "@majordev/react-reusable-ui";

// Alphanumeric input (letters and numbers)
<PinInput
  length={5}
  alphanumeric={true}
  numbersOnly={false}
  placeholder="*"
  onChange={(value) => console.log(value)}
/>

// Letters only input
<PinInput
  length={4}
  lettersOnly={true}
  numbersOnly={false}
  placeholder="*"
/>`}
          language="tsx"
        />
      </section>

      {/* Advanced Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Advanced Usage</h2>
        <p className="text-gray-300">PIN input with all features enabled</p>
        <div className="bg-[#11235a]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
          <PinInput
            length={4}
            mask={true}
            theme="dark"
            variant="filled"
            size="lg"
            numbersOnly={true}
            allowPaste={true}
            allowClear={true}
            allowBackspace={true}
            autoSubmit={true}
            focusNextOnChange={true}
            focusPrevOnBackspace={true}
            maxLength={1}
            placeholder="•"
            onChange={(value) => console.log("Current:", value)}
            onComplete={(value) => console.log("Complete:", value)}
            wrapperClassName="pin-wrapper"
            inputClassName="pin-digit"
          />
        </div>
        <CodeBlock
          code={`import { PinInput } from "@majordev/react-reusable-ui";

<PinInput
  length={4}
  mask={true}
  theme="dark"
  variant="filled"
  size="lg"
  numbersOnly={true}
  allowPaste={true}
  allowClear={true}
  allowBackspace={true}
  autoSubmit={true}
  focusNextOnChange={true}
  focusPrevOnBackspace={true}
  maxLength={1}
  placeholder="•"
  onChange={(value) => console.log("Current:", value)}
  onComplete={(value) => console.log("Complete:", value)}
  wrapperClassName="pin-wrapper"
  inputClassName="pin-digit"
/>`}
          language="tsx"
        />
      </section>

      {/* Props Documentation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Props</h2>
        <div className="bg-[#11235a]/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
          <Card className="bg-[#0a1836] p-6 rounded-lg border border-gray-700/50 overflow-x-auto max-w-[80vw]">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-700/50">
                  <th className="text-left py-3 px-4 text-white">Prop</th>
                  <th className="text-left py-3 px-4 text-white">Type</th>
                  <th className="text-left py-3 px-4 text-white">Default</th>
                  <th className="text-left py-3 px-4 text-white">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">length</td>
                  <td className="py-3 px-4 text-gray-300">number</td>
                  <td className="py-3 px-4 text-gray-300">4</td>
                  <td className="py-3 px-4 text-gray-300">
                    Number of PIN digits
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">disabled</td>
                  <td className="py-3 px-4 text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-300">false</td>
                  <td className="py-3 px-4 text-gray-300">
                    Whether the input is disabled
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">mask</td>
                  <td className="py-3 px-4 text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-300">false</td>
                  <td className="py-3 px-4 text-gray-300">
                    Whether to mask the input
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">autoFocus</td>
                  <td className="py-3 px-4 text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-300">true</td>
                  <td className="py-3 px-4 text-gray-300">
                    Whether to auto-focus the first input
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">onComplete</td>
                  <td className="py-3 px-4 text-gray-300">
                    (value: string) =&gt; void
                  </td>
                  <td className="py-3 px-4 text-gray-300">-</td>
                  <td className="py-3 px-4 text-gray-300">
                    Callback when PIN is complete
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">onChange</td>
                  <td className="py-3 px-4 text-gray-300">
                    (value: string) =&gt; void
                  </td>
                  <td className="py-3 px-4 text-gray-300">-</td>
                  <td className="py-3 px-4 text-gray-300">
                    Callback when PIN changes
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">theme</td>
                  <td className="py-3 px-4 text-gray-300">
                    &quot;light&quot; | &quot;dark&quot;
                  </td>
                  <td className="py-3 px-4 text-gray-300">undefined</td>
                  <td className="py-3 px-4 text-gray-300">Theme variant</td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">variant</td>
                  <td className="py-3 px-4 text-gray-300">
                    &quot;outline&quot; | &quot;filled&quot; |
                    &quot;flushed&quot; | &quot;unstyled&quot;
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    &quot;outline&quot;
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    Visual style variant
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">size</td>
                  <td className="py-3 px-4 text-gray-300">
                    &quot;xs&quot; | &quot;sm&quot; | &quot;md&quot; |
                    &quot;lg&quot; | &quot;xl&quot;
                  </td>
                  <td className="py-3 px-4 text-gray-300">&quot;md&quot;</td>
                  <td className="py-3 px-4 text-gray-300">Size of the input</td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">numbersOnly</td>
                  <td className="py-3 px-4 text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-300">true</td>
                  <td className="py-3 px-4 text-gray-300">
                    Restrict to numbers only
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">lettersOnly</td>
                  <td className="py-3 px-4 text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-300">false</td>
                  <td className="py-3 px-4 text-gray-300">
                    Restrict to letters only
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">alphanumeric</td>
                  <td className="py-3 px-4 text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-300">false</td>
                  <td className="py-3 px-4 text-gray-300">
                    Allow both letters and numbers
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">allowSpecial</td>
                  <td className="py-3 px-4 text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-300">false</td>
                  <td className="py-3 px-4 text-gray-300">
                    Allow special characters
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">allowPaste</td>
                  <td className="py-3 px-4 text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-300">true</td>
                  <td className="py-3 px-4 text-gray-300">
                    Enable paste functionality
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">allowClear</td>
                  <td className="py-3 px-4 text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-300">true</td>
                  <td className="py-3 px-4 text-gray-300">
                    Whether to allow clearing the input
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">allowBackspace</td>
                  <td className="py-3 px-4 text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-300">true</td>
                  <td className="py-3 px-4 text-gray-300">
                    Whether to allow backspace navigation
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">autoSubmit</td>
                  <td className="py-3 px-4 text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-300">false</td>
                  <td className="py-3 px-4 text-gray-300">
                    Auto-submit when complete
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">focusNextOnChange</td>
                  <td className="py-3 px-4 text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-300">true</td>
                  <td className="py-3 px-4 text-gray-300">
                    Whether to focus next input on change
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">focusPrevOnBackspace</td>
                  <td className="py-3 px-4 text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-300">true</td>
                  <td className="py-3 px-4 text-gray-300">
                    Whether to focus previous input on backspace
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">clearOnComplete</td>
                  <td className="py-3 px-4 text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-300">false</td>
                  <td className="py-3 px-4 text-gray-300">
                    Whether to clear all inputs on complete
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">resetOnComplete</td>
                  <td className="py-3 px-4 text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-300">false</td>
                  <td className="py-3 px-4 text-gray-300">
                    Whether to reset and focus first input on complete
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">validateOnComplete</td>
                  <td className="py-3 px-4 text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-300">false</td>
                  <td className="py-3 px-4 text-gray-300">
                    Whether to validate on complete
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">showCharacterCount</td>
                  <td className="py-3 px-4 text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-300">false</td>
                  <td className="py-3 px-4 text-gray-300">
                    Whether to show character count below each input
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">showPin</td>
                  <td className="py-3 px-4 text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-300">false</td>
                  <td className="py-3 px-4 text-gray-300">
                    Whether to show the PIN when masked
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">validation</td>
                  <td className="py-3 px-4 text-gray-300">object</td>
                  <td className="py-3 px-4 text-gray-300">-</td>
                  <td className="py-3 px-4 text-gray-300">
                    Custom validation pattern and message
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">error</td>
                  <td className="py-3 px-4 text-gray-300">string</td>
                  <td className="py-3 px-4 text-gray-300">-</td>
                  <td className="py-3 px-4 text-gray-300">
                    Error message to display
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">hasError</td>
                  <td className="py-3 px-4 text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-300">false</td>
                  <td className="py-3 px-4 text-gray-300">
                    Whether to show error state
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">placeholder</td>
                  <td className="py-3 px-4 text-gray-300">string</td>
                  <td className="py-3 px-4 text-gray-300">&quot;•&quot;</td>
                  <td className="py-3 px-4 text-gray-300">
                    Custom placeholder character
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">maxLength</td>
                  <td className="py-3 px-4 text-gray-300">number</td>
                  <td className="py-3 px-4 text-gray-300">1</td>
                  <td className="py-3 px-4 text-gray-300">
                    Maximum length per input
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">wrapperClassName</td>
                  <td className="py-3 px-4 text-gray-300">string</td>
                  <td className="py-3 px-4 text-gray-300">-</td>
                  <td className="py-3 px-4 text-gray-300">
                    Custom class for the wrapper
                  </td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 text-white">inputClassName</td>
                  <td className="py-3 px-4 text-gray-300">string</td>
                  <td className="py-3 px-4 text-gray-300">-</td>
                  <td className="py-3 px-4 text-gray-300">
                    Custom class for each input
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PinInputDocs;
