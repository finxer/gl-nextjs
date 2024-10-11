import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FacilitiesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Facilities</h1>
      <Card>
        <CardHeader>
          <CardTitle>Facility Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Facility management content will be added here.</p>
        </CardContent>
      </Card>
    </div>
  )
}