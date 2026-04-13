"use client";

import { contactFormOpen } from "@/store/contact-store";
import { sendAdminMail } from "@/utils/send-mail-admin";
import { IconLoader2 } from "@tabler/icons-react";
import { formOptions, useForm } from "@tanstack/react-form";
import { useAtom } from "jotai";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Field, FieldContent, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

export default function ContactFormDialog() {
  const [open, isOpen] = useAtom(contactFormOpen);

  const formOpts = formOptions({
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      phoneNumber: "",
      email: "",
    },
  });

  const form = useForm({
    ...formOpts,

    onSubmit: async ({ value }) => {
      await sendAdminMail(value);
    },
  });

  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        isOpen(false);
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log("handle submission");
        }}
      >
        <DialogContent className={"bg-background text-foreground rounded-none"}>
          {/* Header */}
          <DialogHeader>
            <DialogTitle>Contact form</DialogTitle>
          </DialogHeader>
          {/* End Header */}

          {/* Form Content */}
          <FieldGroup className="text-foreground **:[&>input]:rounded-none **:[&>input]:border-primary/30">
            <form.Field name="firstName">
              {(field) => (
                <Field>
                  <FieldLabel>First Name</FieldLabel>
                  <FieldContent>
                    <Input
                      name={field.name}
                      value={field.state.value}
                      placeholder="Your first name"
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  </FieldContent>
                </Field>
              )}
            </form.Field>
            <form.Field name="lastName">
              {(field) => (
                <Field>
                  <FieldLabel>Last Name</FieldLabel>
                  <FieldContent>
                    <Input
                      name={field.name}
                      value={field.state.value}
                      placeholder="Your Last name"
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  </FieldContent>
                </Field>
              )}
            </form.Field>
            <form.Field name="companyName">
              {(field) => (
                <Field>
                  <FieldLabel>Company Name</FieldLabel>
                  <FieldContent>
                    <Input
                      name={field.name}
                      value={field.state.value}
                      placeholder="Acme Corp."
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  </FieldContent>
                </Field>
              )}
            </form.Field>
            <form.Field name="phoneNumber">
              {(field) => (
                <Field>
                  <FieldLabel>Phone Number</FieldLabel>
                  <FieldContent>
                    <Input
                      name={field.name}
                      value={field.state.value}
                      placeholder="*** *** 12"
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  </FieldContent>
                </Field>
              )}
            </form.Field>
            <form.Field name="email">
              {(field) => (
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <FieldContent>
                    <Input
                      name={field.name}
                      value={field.state.value}
                      placeholder="abc@company.com"
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  </FieldContent>
                </Field>
              )}
            </form.Field>
          </FieldGroup>
          {/* End Form Content */}

          {/* Footer */}

          <DialogFooter className="bg-background border-primary/40">
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
            >
              {([canSubmit, isSubmitting]) => {
                return (
                  <Button
                    type="submit"
                    disabled={!canSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      form.handleSubmit();
                    }}
                  >
                    {isSubmitting ? (
                      <IconLoader2 className="animate-spin" />
                    ) : null}
                    Submit
                  </Button>
                );
              }}
            </form.Subscribe>
          </DialogFooter>

          {/* End Footer */}
        </DialogContent>
      </form>
    </Dialog>
  );
}
