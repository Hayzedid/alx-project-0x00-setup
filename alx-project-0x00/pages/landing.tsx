import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Landing Page</h1>
      
      {/* Small Buttons */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Small Buttons</h2>
        <div className="flex gap-4">
          <Button title="Small Rounded-sm" styles="bg-blue-500 text-white hover:bg-blue-600" size="small" shape="rounded-sm" />
          <Button title="Small Rounded-md" styles="bg-blue-500 text-white hover:bg-blue-600" size="small" shape="rounded-md" />
          <Button title="Small Rounded-full" styles="bg-blue-500 text-white hover:bg-blue-600" size="small" shape="rounded-full" />
        </div>
      </div>

      {/* Medium Buttons */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Medium Buttons</h2>
        <div className="flex gap-4">
          <Button title="Medium Rounded-sm" styles="bg-blue-500 text-white hover:bg-blue-600" size="medium" shape="rounded-sm" />
          <Button title="Medium Rounded-md" styles="bg-blue-500 text-white hover:bg-blue-600" size="medium" shape="rounded-md" />
          <Button title="Medium Rounded-full" styles="bg-blue-500 text-white hover:bg-blue-600" size="medium" shape="rounded-full" />
        </div>
      </div>

      {/* Large Buttons */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Large Buttons</h2>
        <div className="flex gap-4">
          <Button title="Large Rounded-sm" styles="bg-blue-500 text-white hover:bg-blue-600" size="large" shape="rounded-sm" />
          <Button title="Large Rounded-md" styles="bg-blue-500 text-white hover:bg-blue-600" size="large" shape="rounded-md" />
          <Button title="Large Rounded-full" styles="bg-blue-500 text-white hover:bg-blue-600" size="large" shape="rounded-full" />
        </div>
      </div>

      {/* Custom Styles Examples */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Custom Styles Examples</h2>
        <div className="flex gap-4">
          <Button title="Green Button" styles="bg-green-500 hover:bg-green-600 text-white" size="medium" shape="rounded-md" />
          <Button title="Red Button" styles="bg-red-500 hover:bg-red-600 text-white" size="medium" shape="rounded-full" />
          <Button title="Purple Button" styles="bg-purple-500 hover:bg-purple-600 text-white" size="large" shape="rounded-sm" />
        </div>
      </div>

      <div className="flex flex-wrap gap-6 mt-6">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
export default Landing