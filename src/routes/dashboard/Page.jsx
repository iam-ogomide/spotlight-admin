import React from 'react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis,  BarChart, Bar, CartesianGrid, PieChart, Pie, Cell,Legend } from "recharts";

// import { useTheme } from "@/hooks/use-theme";

import { useTheme } from "../../hooks/use-theme";

// import { overviewData, recentSalesData, topProducts } from "@/constants";

import { overviewData, recentSalesData, topProducts } from "../../constants/Index" ;

// import { Footer } from "@/layouts/footer";

import { CreditCard, DollarSign, Package, PencilLine, Star, Trash, TrendingUp, Users, Briefcase, Trophy, Target, User} from "lucide-react";
import { Footer } from '../../layouts/Footer';

const DashboardPage = () => {
  const { theme } = useTheme();

  const skillsData = [
    { skill: 'React', count: 45 },
    { skill: 'Python', count: 38 },
    { skill: 'Java', count: 32 },
    { skill: 'Node.js', count: 28 },
  ];

  const data = [
    { name: "Submitted", value: 75, color: "#f6b93b" }, // Green
    { name: "Not Submitted", value: 25, color: "#36a2f6" }, // Red
  ];

  
  return (
    <div className="flex flex-col gap-y-4">
    <h1 className="title">Dashboard</h1>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="card " >
            <div className="card-header">
                <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                    <Target size={26} />
                </div>
                <p className="card-title">Active Projects</p>
            </div>
            <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">25</p>
                {/* <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                    <TrendingUp size={18} />
                    25%
                </span> */}
            </div>
        </div>
        <div className="card">
            <div className="card-header">
                <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                    <Users size={26} />
                </div>
                <p className="card-title">Active Participants</p>
            </div>
            <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">160</p>
                {/* <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                    <TrendingUp size={18} />
                    12%
                </span> */}
            </div>
        </div>
        <div className="card">
            <div className="card-header">
                <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                    <Briefcase size={26} />
                </div>
                <p className="card-title">Hired Talents</p>
            </div>
            <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">15</p>
               
            </div>
        </div>
        <div className="card">
            <div className="card-header">
                <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                    <Trophy size={26} />
                </div>
                <p className="card-title">Avg Score</p>
            </div>
            <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">78.3</p>
                
            </div>
        </div>
    </div>

    {/* //LINE CHART  */}
    <div className="">
        <div className="card ">
            <div className="card-header">
                <p className="card-title">Performance Engagement</p>
            </div>
            <div className="card-body p-0">
                <ResponsiveContainer
                    width="100%"
                    height={300}
                >
                    <AreaChart
                        data={overviewData}
                        margin={{
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <defs>
                            <linearGradient
                                id="colorTotal"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#2563eb"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#2563eb"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>
                        <Tooltip
                            cursor={false}
                            formatter={(value) => `${value}`}
                        />

                        <XAxis
                            dataKey="name"
                            strokeWidth={0}
                            stroke={theme === "light" ? "#475569" : "#94a3b8"}
                            tickMargin={6}
                        />
                        <YAxis
                            dataKey="total"
                            strokeWidth={0}
                            stroke={theme === "light" ? "#475569" : "#94a3b8"}
                            tickFormatter={(value) => `${value}`}
                            tickMargin={6}
                        />

                        <Area
                            type="monotone"
                            dataKey="total"
                            stroke="#2563eb"
                            fillOpacity={1}
                            fill="url(#colorTotal)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
       
    </div>


    {/* //BARCHART AND PIE CHART */}
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="card col-span-1 md:col-span-2 lg:col-span-4">
            <div className="card-header">
                <p className="card-title">Top Skills Engagement</p>
            </div>
            <div className="card-body p-0">
                <ResponsiveContainer
                    width="100%"
                    height={300}
                >
                   <BarChart data={skillsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="skill" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill={'#3b82f6'} />
              </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
        <div className="card col-span-1 md:col-span-2 lg:col-span-3">
            <div className="card-header">
                <p className="card-title">Project Submission Rate</p>
            </div>
            <div className="card-body p-0">
            <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label
            labelLine={false}
          >
            <Cell fill={data[0].color} /> {/* Submitted - Green */}
            <Cell fill={data[1].color} /> {/* Not Submitted - Red */}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
            </div>
        </div>
    </div>
    {/* <Footer /> */}
    <Footer />
</div>
  )
}

export default DashboardPage