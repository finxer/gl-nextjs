import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResidentList } from "@/components/ResidentList"

export default function ResidentsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Residents</h1>
      <Card>
        <CardHeader>
          <CardTitle>Resident List</CardTitle>
        </CardHeader>
        <CardContent>
          <ResidentList />
        </CardContent>
      </Card>
    </div>
  )
}