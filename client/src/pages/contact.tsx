import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, User } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await fetch("https://formcarry.com/s/AJJQQuVCJBl", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)  // Send data as JSON instead of FormData
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Submission failed");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", institution: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Error Sending Message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <User className="w-5 h-5" />,
      title: "Faculty SPOC",
      details: [
        "Dr. Vidhyalakshmi M K",
        "vidhyalm1@srmist.edu.in",
        "+91 94432 23066"
      ],
      color: "text-primary"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Student SPOCs",
      details: [
        "Harshil Malhotra - hm3673@srmist.edu.in",
        "+91 62309 31075",
        "Harsh Arora - +91 93725 85511"
      ],
      color: "text-green-400"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Event Location",
      details: [
        "<span className='text-primary font-semibold'>SRM Institute of Science and Technology</span>",
        "Kattankulathur, Tamil Nadu 603203",
        "India"
      ],
      color: "text-purple-400"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Contact Hero */}
      <section className="py-20 px-4 bg-gradient-to-t from-card to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-bold text-4xl md:text-5xl mb-6 text-primary">
              GET IN TOUCH
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We're here to help you navigate your robotics journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-bold text-2xl mb-6 text-cyan-400">Contact Information</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className={`bg-card/50 border border-primary/30`}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-primary to-cyan-400 text-black`}>
                            {info.icon}
                          </div>
                          <div>
                            <h3 className={`font-semibold text-lg mb-2 ${info.color}`}>
                              {info.title}
                            </h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className={idx === 0 ? "font-semibold" : "text-muted-foreground"}>
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <Card className="bg-card border-primary/30">
                <CardHeader>
                  <CardTitle className="text-2xl text-cyan-400">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-muted-foreground mb-2">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-background border-primary/30 focus:border-primary"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-muted-foreground mb-2">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-background border-primary/30 focus:border-primary"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="institution" className="text-sm font-medium text-muted-foreground mb-2">
                        Institution
                      </Label>
                      <Input
                        id="institution"
                        name="institution"
                        type="text"
                        value={formData.institution}
                        onChange={handleInputChange}
                        className="bg-background border-primary/30 focus:border-primary"
                        placeholder="Enter your school/college name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-muted-foreground mb-2">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-background border-primary/30 focus:border-primary resize-none min-h-32"
                        placeholder="Tell us about your questions or interest in ROBOFEST..."
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={contactMutation.isPending}
                      className="w-full bg-gradient-to-r from-primary to-cyan-400 text-black font-semibold text-lg hover:scale-105 transition-transform py-3"
                    >
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
