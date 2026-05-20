import React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface EditorDialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  title: string
  description?: string
  footer?: React.ReactNode
  children?: React.ReactNode
}

export function EditorDialog({
  open,
  onOpenChange,
  title,
  description,
  footer,
  children,
}: EditorDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-3xl border-border bg-bg-elevated text-text-primary">
        <DialogHeader>
          <DialogTitle className="text-text-primary">{title}</DialogTitle>
          {description && (
            <DialogDescription className="text-text-muted">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        {children}
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  )
}
