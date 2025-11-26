export function Spinner() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="w-12 h-12 border-4 border-border rounded-full animate-spin"
        style={{ borderTopColor: "var(--color-primary)" }}
      ></div>
      <p className="text-muted-foreground">Loading visa requirements...</p>
    </div>
  )
}
