import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/db";
import { createIssueSchema } from "../../createIssueSchema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createIssueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });
  console.log(newIssue);
  return NextResponse.json(newIssue, { status: 201 });
}
