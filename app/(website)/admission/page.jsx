"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MoveRight,
  Check,
  CheckCircle,
} from "lucide-react";

export default function AdmissionForm() {
  const [showSuccessModal, setShowSuccessModal] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessModal(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="">
        <div className="container mx-auto px-4 py-4">
          <div className="text-sm flex items-center border-b border-gray-300 py-4">
            <Link href="#" className="text-primary text-base hover:underline">
              Admission
            </Link>
            <MoveRight className="mx-2" />
            <span className="text-gray-600 text-base">Student Admission</span>
          </div>
        </div>
      </nav>

      <div className="container px-4 mx-auto py-8">
        <form onSubmit={handleSubmit} className="max-w-5xl space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-6">Student Info</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Admission Number*
                </label>
                <Input defaultValue="471" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Admission Date*
                </label>
                <Input type="date" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Class*</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select--" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jss1">JSS 1</SelectItem>
                    <SelectItem value="jss2">JSS 2</SelectItem>
                    <SelectItem value="jss3">JSS 3</SelectItem>
                    <SelectItem value="ss1">SS 1</SelectItem>
                    <SelectItem value="ss2">SS 2</SelectItem>
                    <SelectItem value="ss3">SS 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  First Name*
                </label>
                <Input placeholder="First Name" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Middle Name
                </label>
                <Input placeholder="Email here" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Last Name*
                </label>
                <Input placeholder="Last Name" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Date of Birth*
                </label>
                <Input type="date" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Gender*
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select--" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Address*
                </label>
                <Input placeholder="Address" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">State*</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select--" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lagos">Lagos</SelectItem>
                    <SelectItem value="abuja">Abuja</SelectItem>
                    <SelectItem value="rivers">Rivers</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">LGA*</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select--" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lga1">LGA 1</SelectItem>
                    <SelectItem value="lga2">LGA 2</SelectItem>
                    <SelectItem value="lga3">LGA 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email*</label>
                <Input type="email" placeholder="Email here" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Mobile number*
                </label>
                <Input type="tel" placeholder="Mobile number" required />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Previous School*
                </label>
                <Input placeholder="Previous School" required />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Parent/Guardian Info</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Title*</label>
                <Input placeholder="Mr" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  First Name*
                </label>
                <Input placeholder="First Name" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Middle Name
                </label>
                <Input placeholder="Email here" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Last Name*
                </label>
                <Input placeholder="Last Name" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Date of Birth*
                </label>
                <Input type="date" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Gender*
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select--" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Address*
                </label>
                <Input placeholder="Address" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">State*</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select--" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lagos">Lagos</SelectItem>
                    <SelectItem value="abuja">Abuja</SelectItem>
                    <SelectItem value="rivers">Rivers</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">LGA*</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select--" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lga1">LGA 1</SelectItem>
                    <SelectItem value="lga2">LGA 2</SelectItem>
                    <SelectItem value="lga3">LGA 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email*</label>
                <Input type="email" placeholder="Email here" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Mobile number*
                </label>
                <Input type="tel" placeholder="Mobile number" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Educational Qualification
                </label>
                <Input placeholder="Educational Qualification" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Occupation
                </label>
                <Input placeholder="Occupation" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Annual Income
                </label>
                <Input placeholder="Annual Income" />
              </div>
            </div>
          </section>

          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-primary hover:bg-primary-2 text-white px-8"
            >
              Submit Application
            </Button>
          </div>
        </form>
      </div>

      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <div className="flex items-center mb-2 justify-center">
              <div className="bg-[#A5FFB9] flex items-center justify-center rounded-md border-2 border-[#09B451] w-14 h-14">
                <CheckCircle className="w-6 h-6 text-[#09B451]" />
              </div>
            </div>
            <DialogTitle className="text-center text-gray-1 text-2xl">
              Congratulations!
            </DialogTitle>
            <DialogDescription className="text-center text-gray-2">
              Thank you for completing the admission form! Your application has
              been received. Please check back later to view your admission
              status.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center">
            <Button
              onClick={() => setShowSuccessModal(false)}
              className="bg-primary hover:bg-primary-2 text-white"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
