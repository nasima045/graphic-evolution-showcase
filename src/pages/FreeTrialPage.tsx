import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";

const serviceOptions = [
  "Background Removal (Clipping Path / Transparent Background)",
  "Retouching (Skin/Model/Product Enhancement)",
  "Color Correction / Adjustment",
  "Invisible Mannequin / Ghost Mannequin",
  "Color Matching / Color Variant Creation",
  "Shadow Creation / Natural Drop Shadow",
  "Image Cropping & Resizing",
  "Image Manipulation / Compositing",
  "Wrinkle & Dust Removal (Product or Apparel)",
  "Custom Editing (please specify below)",
];

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  businessType: z.string().min(2, "Business type is required"),
  email: z.string().email("Invalid email address"),
  fileType: z.string().min(1, "Please select a file type"),
  serviceType: z.string().min(1, "Please select a service type"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  files: z.any().refine((files) => files?.length > 0, "Please upload at least one file")
    .refine((files) => files?.length <= 5, "You can upload maximum 5 files")
    .refine((files) => {
      return Array.from(files).every((file: any) => file.size <= 5 * 1024 * 1024);
    }, "Each file must be less than 5MB"),
});

const FreeTrialPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      businessType: "",
      email: "",
      fileType: "",
      serviceType: "",
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("businessType", values.businessType);
      formData.append("email", values.email);
      formData.append("fileType", values.fileType);
      formData.append("serviceType", values.serviceType);
      formData.append("description", values.description);
      formData.append("to", "mhtanim2@gmail.com");
      
      Array.from(values.files).forEach((file: any) => {
        formData.append("files", file);
      });

      toast({
        title: "Form Submitted!",
        description: "We'll review your files and get back to you within 24 hours.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-slideUp">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Start Your <span className="text-gradient">Free Trial</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Get 10 images edited for free. No credit card required.
            </p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 glow-effect">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="businessType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Type</FormLabel>
                      <FormControl>
                        <Input placeholder="E-commerce, Photography Studio, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="fileType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Professional File Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select file type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="JPG">JPG</SelectItem>
                          <SelectItem value="PNG">PNG</SelectItem>
                          <SelectItem value="PDF">PDF</SelectItem>
                          <SelectItem value="Others">Others</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What kind of image editing do you need?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {serviceOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us more about your requirements..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="files"
                  render={({ field: { onChange, value, ...field } }) => (
                    <FormItem>
                      <FormLabel>Upload Files (Max 5 files, 5MB each)</FormLabel>
                      <FormControl>
                        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                          <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                          <Input
                            type="file"
                            multiple
                            accept="image/*,.pdf"
                            onChange={(e) => onChange(e.target.files)}
                            className="hidden"
                            id="file-upload"
                            {...field}
                          />
                          <label htmlFor="file-upload" className="cursor-pointer">
                            <p className="text-muted-foreground mb-2">
                              Click to upload or drag and drop
                            </p>
                            <p className="text-sm text-muted-foreground">
                              JPG, PNG, PDF (max 5MB each)
                            </p>
                          </label>
                          {value && value.length > 0 && (
                            <p className="mt-4 text-sm text-primary">
                              {value.length} file(s) selected
                            </p>
                          )}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-effect text-white text-lg h-12"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Free Trial Request"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FreeTrialPage;
