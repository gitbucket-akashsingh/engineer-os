import { motion } from "framer-motion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";

import ArchitectureCard from "@/features/architecture/components/ArchitectureCard";

import { architectureData } from "@/shared/data/architectureData";

import { fadeInUp, staggerContainer } from "@/shared/utils/motion";

function ArchitecturePage() {
  return (
    <motion.div
      className="space-y-8"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* HEADER */}
      <motion.section variants={fadeInUp} className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">System Design Hub</h1>

        <p className="text-muted-foreground text-lg">
          Visualize architecture systems, infrastructure, and scalable
          engineering design.
        </p>
      </motion.section>

      {/* TABS */}
      <motion.div variants={fadeInUp}>
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>

            <TabsTrigger value="microservices">Microservices</TabsTrigger>

            <TabsTrigger value="database">Database</TabsTrigger>

            <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          </TabsList>

          {/* OVERVIEW */}
          <TabsContent value="overview" className="mt-6">
            <div className="grid gap-6 lg:grid-cols-3">
              {architectureData.map((architecture) => (
                <ArchitectureCard
                  key={architecture.id}
                  architecture={architecture}
                />
              ))}
            </div>
          </TabsContent>

          {/* MICROSERVICES */}
          <TabsContent value="microservices" className="mt-6">
            <div
              className="
                rounded-xl border p-8
                text-muted-foreground
              "
            >
              Microservice architecture visualization will be implemented here.
            </div>
          </TabsContent>

          {/* DATABASE */}
          <TabsContent value="database" className="mt-6">
            <div
              className="
                rounded-xl border p-8
                text-muted-foreground
              "
            >
              Database relationship visualization will be implemented here.
            </div>
          </TabsContent>

          {/* INFRASTRUCTURE */}
          <TabsContent value="infrastructure" className="mt-6">
            <div
              className="
                rounded-xl border p-8
                text-muted-foreground
              "
            >
              Infrastructure deployment architecture will be implemented here.
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  );
}

export default ArchitecturePage;
