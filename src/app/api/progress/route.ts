import { auth } from "@/auth"
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const progress = await prisma.userProgress.findMany({
    where: { userId: session.user.id }
  })

  return NextResponse.json({
    completedNodes: progress.map(p => p.nodeId)
  })
}

export async function POST(req: Request) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const { nodeId } = await req.json()

  const progress = await prisma.userProgress.upsert({
    where: {
      userId_nodeId: {
        userId: session.user.id,
        nodeId
      }
    },
    update: { completed: true }, // Simplified: always mark as completed on post
    create: {
      userId: session.user.id,
      nodeId,
      completed: true
    }
  })

  return NextResponse.json(progress)
}
