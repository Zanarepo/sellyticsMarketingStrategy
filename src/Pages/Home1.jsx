import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { User } from "@/entities/User";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Building2, MapPin, Shield, Clock, Zap } from "lucide-react";

export default function Welcome() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    checkUserStatus();
  }, []);

  const checkUserStatus = async () => {
    try {
      const user = await User.me();
      if (user.user_type) {
        if (user.user_type === "driver" || user.user_type === "both") {
          navigate(createPageUrl("DriverDashboard"));
        } else {
          navigate(createPageUrl("OperatorDashboard"));
        }
      } else {
        navigate(createPageUrl("RoleSelection"));
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    await User.loginWithRedirect(window.location.origin + createPageUrl("RoleSelection"));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-yellow-50">
        <div className="flex items-center gap-3">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600" />
          <span className="text-gray-600">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-yellow-50 to-emerald-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-2xl mb-6 shadow-lg">
            <Car className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            E-Parking Lagos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Solving Lagos parking one spot at a time with AI and mobile-first technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
              <CardTitle className="text-xl">Find Parking Fast</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Real-time parking availability across Victoria Island, Ikeja, and Lekki
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-yellow-600" />
              </div>
              <CardTitle className="text-xl">Safe & Secure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Verified parking spaces with CCTV, security guards, and digital payments
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-emerald-600" />
              </div>
              <CardTitle className="text-xl">QR Check-in</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Seamless check-in and automatic billing. Pay only for the time you use
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-2xl bg-gradient-to-br from-emerald-500 to-yellow-500 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-white/90 mb-8 text-lg">
                Join thousands of drivers and parking operators making Lagos parking easier
              </p>
              <Button 
                size="lg" 
                className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl font-semibold"
                onClick={handleLogin}
              >
                Login / Sign Up with Google
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Car className="w-6 h-6 text-emerald-600" />
                <CardTitle>For Drivers</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  Save 30+ minutes daily
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  Secure verified parking
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-600" />
                  Instant QR check-in
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="w-6 h-6 text-yellow-600" />
                <CardTitle>For Operators</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-600" />
                  Maximize occupancy
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-yellow-600" />
                  Secure digital payments
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-yellow-600" />
                  Real-time analytics
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}