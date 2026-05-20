"use client"

import { Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <div
      className={`fixed left-0 top-12 z-30 flex h-[calc(100vh-3rem)] w-72 flex-col border-r border-border bg-bg-surface transition-transform duration-200 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <span className="text-sm font-medium text-text-primary">Projects</span>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="my-projects" className="min-h-0 flex-1">
        <div className="px-4 pt-3">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="my-projects">My Projects</TabsTrigger>
            <TabsTrigger value="shared">Shared</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent
          value="my-projects"
          className="flex flex-1 items-center justify-center"
        >
          <p className="text-sm text-text-muted">No projects yet</p>
        </TabsContent>
        <TabsContent
          value="shared"
          className="flex flex-1 items-center justify-center"
        >
          <p className="text-sm text-text-muted">No shared projects</p>
        </TabsContent>
      </Tabs>

      <div className="border-t border-border p-4">
        <Button className="w-full gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </div>
  )
}
