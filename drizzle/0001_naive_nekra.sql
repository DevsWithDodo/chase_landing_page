ALTER TABLE "waitlist" ADD COLUMN "invitation_code" varchar(50);--> statement-breakpoint
ALTER TABLE "waitlist" ADD COLUMN "referred_by" varchar(50);--> statement-breakpoint
ALTER TABLE "waitlist" ADD CONSTRAINT "waitlist_invitation_code_unique" UNIQUE("invitation_code");