import './App.css'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          React + shadcn/ui App
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Your React app with shadcn/ui and Tailwind CSS is ready!
        </p>
        
        {/* Demo Components */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Button Components</CardTitle>
              <CardDescription>
                Various button styles from shadcn/ui
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Input Components</CardTitle>
              <CardDescription>
                Form inputs with shadcn/ui styling
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Enter your name" />
              <Input type="email" placeholder="Enter your email" />
              <Input type="password" placeholder="Enter your password" />
              <Input disabled placeholder="Disabled input" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Typography</CardTitle>
              <CardDescription>
                Text styles using Tailwind CSS classes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <h4 className="text-lg font-semibold">Heading 4</h4>
              <p className="text-sm text-muted-foreground">
                This is a paragraph with muted foreground color.
              </p>
              <p className="text-base">
                This is a regular paragraph with normal text.
              </p>
              <code className="bg-muted px-2 py-1 rounded text-sm">
                const example = "code"
              </code>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>🎉 Setup Complete!</CardTitle>
              <CardDescription>
                Your React app is now configured with:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-left space-y-2">
                <li>✅ React + TypeScript</li>
                <li>✅ Vite for fast development</li>
                <li>✅ Tailwind CSS for styling</li>
                <li>✅ shadcn/ui component library</li>
                <li>✅ Proper path aliases (@/components)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App