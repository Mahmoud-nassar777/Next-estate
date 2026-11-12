
import { resend } from "@/lib/resend";
import { NextRequest, NextResponse } from "next/server";
import RealEstateInquiryEmail from "@/components/emails/InquiryEmail";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const {
            // ownerEmail,
            ownerName,
            propertyTitle,
            propertyPrice,
            senderEmail,
            senderName,
            message,
            senderPhone,
        } = body;

        const { data, error } = await resend.emails.send({
            from: process.env.EMAIL_FROM!,
            // to: ownerEmail,
            to: "nsar88840@gmail.com",
            subject: `Property Inquiry from ${senderName}`,
            react: RealEstateInquiryEmail({
                senderEmail,
                senderName,
                senderPhone,
                ownerName,
                propertyPrice,
                propertyTitle,
                message,
            }),
        });

        if (error) {
            console.error("Resend Error:", error);
            return NextResponse.json(
                { error: "Failed to send email" },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, data });

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
