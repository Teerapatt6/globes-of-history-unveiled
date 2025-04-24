
import React from 'react';
import NavBar from '@/components/NavBar';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      
      <main className="flex-1 mt-16 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About This Project</h1>
          
          <div className="glass-panel p-6 md:p-8 mb-10">
            <p className="text-lg mb-6">
              Globes of History Unveiled is an interactive educational platform designed to make learning about World Wars and historical events more engaging and comprehensive through data visualization.
            </p>
            
            <p className="mb-6">
              Our mission is to increase understanding and interest in studying history through 3D simulations, reducing reliance on traditional text-based learning and promoting interactive exploration of historical data.
            </p>
            
            <p className="mb-6">
              By presenting historical events on a 3D globe with connections between related events, we help students, teachers, and history enthusiasts understand the complex web of cause and effect that shaped our world.
            </p>
          </div>
          
          <Tabs defaultValue="features">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="future">Future Plans</TabsTrigger>
            </TabsList>
            
            <TabsContent value="features" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center">
                        <span className="text-lg font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Interactive 3D Globe</h3>
                        <p className="text-foreground/70">Navigate a fully interactive globe with event pins marking historical locations.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center">
                        <span className="text-lg font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Chronological Timeline</h3>
                        <p className="text-foreground/70">Explore events year by year with our interactive timeline slider.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center">
                        <span className="text-lg font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Event Relationship Visualization</h3>
                        <p className="text-foreground/70">See connections between historical events with our network graph visualization.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center">
                        <span className="text-lg font-bold">4</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Filtering System</h3>
                        <p className="text-foreground/70">Filter events by time period and event type for targeted learning.</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="technology" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
                  <p className="mb-6">Our platform is built using modern web technologies to deliver a seamless, interactive experience:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="glass-panel p-4">
                      <h3 className="text-lg font-medium mb-2">Frontend</h3>
                      <ul className="list-disc list-inside text-foreground/70">
                        <li>React for UI components</li>
                        <li>TypeScript for type safety</li>
                        <li>Tailwind CSS for styling</li>
                        <li>D3.js for data visualizations</li>
                        <li>Three.js for 3D globe rendering</li>
                      </ul>
                    </div>
                    
                    <div className="glass-panel p-4">
                      <h3 className="text-lg font-medium mb-2">Data Structures</h3>
                      <ul className="list-disc list-inside text-foreground/70">
                        <li>Graph data structures for event relationships</li>
                        <li>Temporal data structures for timeline</li>
                        <li>Geospatial indexing for location search</li>
                        <li>JSON-based data schema</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="future" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Future Developments</h2>
                  <p className="mb-6">We're continually improving the platform with these upcoming features:</p>
                  
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900/20 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Advanced Clustering</h3>
                        <p className="text-foreground/70">Improved event clustering algorithms to better visualize dense areas of historical activity.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900/20 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Expanded Timeline</h3>
                        <p className="text-foreground/70">Coverage of more historical periods beyond World Wars, including Cold War and modern conflicts.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900/20 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Media Integration</h3>
                        <p className="text-foreground/70">Incorporation of archival photos, videos, and audio recordings to enrich the historical context.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900/20 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Customizable Experience</h3>
                        <p className="text-foreground/70">User accounts to save favorite events, create custom timelines, and share discoveries.</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Start Exploring History Today</h2>
            <p className="mb-6">Dive into our interactive platform and discover the interconnected events that shaped our world.</p>
            <Button asChild size="lg">
              <Link to="/explore">
                Explore the Globe
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-foreground/50">
            <p>© 2025 Globes of History. Educational platform for interactive historical exploration.</p>
            <p className="mt-2">
              <Link to="/" className="underline hover:text-foreground/80">Home</Link>
              <span className="mx-2">•</span>
              <Link to="/explore" className="underline hover:text-foreground/80">Explore</Link>
              <span className="mx-2">•</span>
              <a href="#" className="underline hover:text-foreground/80">Contact</a>
              <span className="mx-2">•</span>
              <a href="#" className="underline hover:text-foreground/80">Privacy Policy</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
