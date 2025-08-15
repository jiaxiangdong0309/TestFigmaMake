import React, { useState } from "react";


import { Button } from "./components/ui/button";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./components/ui/breadcrumb";
import {
  UserCheck,
  User,
  CreditCard,
  Settings,
  Lock,
  Coins,
  List,
  Gift,
  Star,
  UserPlus,
  Sparkles,
  Activity,
  Medal,
  Building2,
  BookmarkCheck,
  Heart,
  MessagesSquare,
  MessageSquare,
  CheckCircle,
  BellRing,
  Bell,
  ChevronDown,
  Bookmark,
  History
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import { Separator } from "./components/ui/separator";
import { Badge } from "./components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar";
import { ChevronRight, LogOut } from "lucide-react";
import {
  Alert,
  AlertDescription,
} from "./components/ui/alert";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "./components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./components/ui/dialog";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import {
  Info,
  Unlink,
  Edit,
  X,
  Save,
  Camera,
  Check,
  Award,
  Zap,
  Eye,
  BarChart,
  TrendingUp,
  Target,
  PieChart,
  Briefcase,
  FileText,
} from "lucide-react";

const ProfileCenter = () => {
  // 添加缺失的变量
  const logoImage = "/public/images/navigation/logo-fill5.svg";

  const [isEditing, setIsEditing] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState([
    'personal', 'coin-center', 'activity-center', 'credit-center',
    'favorites', 'reviews', 'notifications'
  ]);
  const [activeMenuItem, setActiveMenuItem] = useState('basic-info');
  const [isJobMenuOpen, setIsJobMenuOpen] = useState(false);
  const [documentDialog, setDocumentDialog] = useState({ isOpen: false, type: '', title: '' });
  const [userInfo, setUserInfo] = useState({
    realName: '张三丰',
    nickname: '功夫达人',
    gender: '未知',
    experience: '未知',
    role: '猎头顾问',
    company: '北京科技集团人力资源股份有限公司'
  });

  const [editForm, setEditForm] = useState(userInfo);

  const handleSave = () => {
    setUserInfo(editForm);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm(userInfo);
    setIsEditing(false);
  };

  const openDocumentDialog = (type, title) => {
    setDocumentDialog({ isOpen: true, type, title });
  };

  const closeDocumentDialog = () => {
    setDocumentDialog({ isOpen: false, type: '', title: '' });
  };

  const toggleMenu = (menuId) => {
    setExpandedMenus(prev =>
      prev.includes(menuId)
        ? prev.filter(id => id !== menuId)
        : [...prev, menuId]
    );
  };

  const getActiveParentMenu = () => {
    for (const item of menuItems) {
      if (item.children.some(child => child.id === activeMenuItem)) {
        return item.id;
      }
    }
    return null;
  };

  const menuItems = [
    {
      id: 'personal',
      label: '个人信息',
      icon: UserCheck,
      children: [
        { id: 'basic-info', label: '基本信息', icon: User },
        { id: 'user-card', label: '用户名片', icon: CreditCard },
        { id: 'preferences', label: '做单偏好', icon: Settings },
        { id: 'security', label: '账号与安全', icon: Lock }
      ]
    },
    {
      id: 'coin-center',
      label: '蛙贝中心',
      icon: Coins,
      children: [
        { id: 'coin-tasks', label: '蛙贝任务', icon: List },
        { id: 'coin-mall', label: '蛙贝商城', icon: Gift },
        { id: 'user-level', label: '用户等级', icon: Star },
        { id: 'invite-users', label: '邀请新用户', icon: UserPlus }
      ]
    },
    {
      id: 'activity-center',
      label: '活动中心',
      icon: Sparkles,
      children: [
        { id: 'activities', label: '禾蛙活动', icon: Activity }
      ]
    },
    {
      id: 'credit-center',
      label: '信用中心',
      icon: Medal,
      children: [
        { id: 'personal-credit', label: '个人信用分', icon: User },
        { id: 'company-credit', label: '企业信用分', icon: Building2 }
      ]
    },
    {
      id: 'favorites',
      label: '收藏管理',
      icon: BookmarkCheck,
      children: [
        { id: 'job-favorites', label: '职位收藏', icon: Heart }
      ]
    },
    {
      id: 'reviews',
      label: '评价管理',
      icon: MessagesSquare,
      children: [
        { id: 'pending-reviews', label: '待评价列表', icon: MessageSquare },
        { id: 'completed-reviews', label: '已评价列表', icon: CheckCircle }
      ]
    },
    {
      id: 'notifications',
      label: '消息通知',
      icon: BellRing,
      children: [
        { id: 'messages', label: '消息通知', icon: Bell }
      ]
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶����导航栏 */}
      <header className="bg-slate-800 border-b sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <img
                src={logoImage}
                alt="禾蛙"
                className="h-8 w-auto"
              />
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-[#20BFA9] transition-colors duration-300 ease-in-out px-2 py-1">首页</a>
              <a href="#" className="text-gray-300 hover:text-[#20BFA9] transition-colors duration-300 ease-in-out px-2 py-1">职位</a>
              <a href="#" className="text-gray-300 hover:text-[#20BFA9] transition-colors duration-300 ease-in-out px-2 py-1">名片库</a>
              <a href="#" className="text-gray-300 hover:text-[#20BFA9] transition-colors duration-300 ease-in-out px-2 py-1">我的人才</a>
              <a href="#" className="text-gray-300 hover:text-[#20BFA9] transition-colors duration-300 ease-in-out px-2 py-1">订单</a>
              <a href="#" className="text-gray-300 hover:text-[#20BFA9] transition-colors duration-300 ease-in-out px-2 py-1">学院</a>
              <div className="relative inline-block">
                <a href="#" className="text-gray-300 hover:text-[#20BFA9] transition-colors duration-300 ease-in-out px-2 py-1">赋能工具</a>
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-medium px-1.5 py-0.5 rounded-full min-w-[20px] h-5 flex items-center justify-center shadow-sm">
                  AI
                </div>
              </div>
            </nav>
          </div>
          <div className="flex items-center space-x-2">
            <DropdownMenu open={isJobMenuOpen} onOpenChange={setIsJobMenuOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="bg-transparent border border-white text-white hover:bg-transparent hover:border-[#20BFA9] hover:text-[#20BFA9] border-[1px] px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105"
                  onMouseEnter={() => setIsJobMenuOpen(true)}
                  onMouseLeave={() => setIsJobMenuOpen(false)}
                >
                  发布职位
                  <ChevronDown className="w-4 h-4 ml-2 transition-colors duration-300 ease-in-out" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-32"
                onMouseEnter={() => setIsJobMenuOpen(true)}
                onMouseLeave={() => setIsJobMenuOpen(false)}
              >
                <DropdownMenuItem>
                  快速发布
                </DropdownMenuItem>
                <DropdownMenuItem>
                  批量导入
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 功能按钮组 */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-[#20BFA9] transition-all duration-300 ease-in-out hover:scale-110 px-3 py-2" title="职位收藏">
                <Bookmark className="w-4 h-4 transition-all duration-300 ease-in-out" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-[#20BFA9] transition-all duration-300 ease-in-out hover:scale-110 px-3 py-2" title="历史记录">
                <History className="w-4 h-4 transition-all duration-300 ease-in-out" />
              </Button>
            </div>



            {/* 通知按钮 */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-[#20BFA9] transition-all duration-300 ease-in-out hover:scale-110 px-3 py-2" title="消息通知">
                <Bell className="w-4 h-4 transition-all duration-300 ease-in-out" />
              </Button>

              {/* 切换身份下拉菜单 */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-gray-300 hover:text-[#20BFA9] transition-all duration-300 ease-in-out px-3 py-2">
                    切换身份
                    <ChevronDown className="w-3 h-3 ml-1 transition-all duration-300 ease-in-out" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                  <DropdownMenuItem>
                    <UserCheck className="w-4 h-4 mr-2" />
                    猎头顾问
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Building2 className="w-4 h-4 mr-2" />
                    企业HR
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <User className="w-4 h-4 mr-2" />
                    个人用户
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <Separator orientation="vertical" className="h-6 bg-gray-600" />

            {/* 个人信息区域 */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs text-[#20BFA9] border-[#20BFA9] bg-[#20BFA9]/10">
                  接
                </Badge>
                <span className="text-white text-sm font-medium">张三丰</span>
              </div>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/api/placeholder/32/32" />
                <AvatarFallback>张</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* 主内容区 */}
      <div className="flex">
        {/* 侧边导航 */}
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <div className="p-6">
            <h2 className="font-medium text-gray-900 mb-4 text-[16px]">个人中心</h2>
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => toggleMenu(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors ${
                      getActiveParentMenu() === item.id
                        ? 'text-[#20BFA9]'
                        : 'text-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div>
                        <item.icon className={`w-4 h-4 ${
                          getActiveParentMenu() === item.id ? 'text-[#20BFA9]' : ''
                        }`} />
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <div>
                      <ChevronRight className={`w-4 h-4 ${
                        getActiveParentMenu() === item.id ? 'text-[#20BFA9]' : ''
                      }`} />
                    </div>
                  </button>

                  {expandedMenus.includes(item.id) && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => setActiveMenuItem(child.id)}
                          className={`w-full flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                            activeMenuItem === child.id
                              ? 'bg-[#20BFA9]/10 text-[#20BFA9] border border-[#20BFA9]/20'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          <span>{child.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Separator className="my-4" />

              <button
                className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
              >
                <div>
                  <LogOut className="w-4 h-4" />
                </div>
                <span>退出登录</span>
              </button>
            </nav>
          </div>
        </aside>

        {/* 主内容 */}
        <main className="flex-1 p-6">
          {/* 面包屑导航 */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">个人中心</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">个人信息</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  {activeMenuItem === 'basic-info' ? '基本信息' :
                   activeMenuItem === 'user-card' ? '用户名片' :
                   activeMenuItem === 'preferences' ? '做单偏好' :
                   activeMenuItem === 'security' ? '账号与安全' : '基本信息'}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* 验证提醒 */}
          {activeMenuItem === 'basic-info' && (
            <Alert className="mb-6 border-amber-200 bg-amber-50 flex items-center justify-between hidden">
              <div className="flex items-center">
                <Info className="h-4 w-4 text-amber-800 mr-2 flex-shrink-0" />
                <AlertDescription className="text-amber-800 mb-0">
                  您还没有进行实名认证，未实名认证将影响您的正常体验和发挥操作。
                </AlertDescription>
              </div>
              <Button variant="link" className="p-0 h-auto text-amber-600 underline flex-shrink-0">
                去实名
              </Button>
            </Alert>
          )}

          {/* 基本信息卡片 */}
          {activeMenuItem === 'basic-info' && (
            <>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-[16px]">基本信息</CardTitle>
                    <CardDescription>管理你的个人基本信息</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    {!isEditing ? (
                      <>
                        <Button variant="outline">
                          <Unlink className="w-4 h-4 mr-2" />
                          解绑猎企
                        </Button>
                        <Button variant="outline" onClick={() => setIsEditing(true)}>
                          <Edit className="w-4 h-4 mr-2" />
                          编辑
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button variant="outline" onClick={handleCancel}>
                          <X className="w-4 h-4 mr-2" />
                          取消
                        </Button>
                        <Button onClick={handleSave}>
                          <Save className="w-4 h-4 mr-2" />
                          保存
                        </Button>
                      </>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* 头像部分 */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src="/api/placeholder/80/80" />
                        <AvatarFallback className="text-xl">张</AvatarFallback>
                      </Avatar>
                      {isEditing && (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
                        >
                          <Camera className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium">{userInfo.realName}</h3>
                      <p className="text-sm text-muted-foreground">
                        {isEditing ? '点击头像更换' : userInfo.role}
                      </p>
                    </div>
                  </div>

                  <Separator />

                  {/* 信息表单 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="realName">真实姓名</Label>
                      {isEditing ? (
                        <Input
                          id="realName"
                          value={editForm.realName}
                          onChange={(e) => setEditForm({...editForm, realName: e.target.value})}
                        />
                      ) : (
                        <div className="flex items-center space-x-2">
                          <span>{userInfo.realName}</span>
                          <Badge variant="secondary" className="text-xs">已认证</Badge>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="nickname">昵称</Label>
                      {isEditing ? (
                        <Input
                          id="nickname"
                          type="text"
                          value={editForm.nickname}
                          onChange={(e) => setEditForm({...editForm, nickname: e.target.value})}
                        />
                      ) : (
                        <span>{userInfo.nickname}</span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="gender">性别</Label>
                      {isEditing ? (
                        <Select value={editForm.gender} onValueChange={(value) => setEditForm({...editForm, gender: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="请选择性别" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="男">男</SelectItem>
                            <SelectItem value="女">女</SelectItem>
                            <SelectItem value="未知">不愿透露</SelectItem>
                          </SelectContent>
                        </Select>
                      ) : (
                        <span>{userInfo.gender}</span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">从业年限</Label>
                      {isEditing ? (
                        <Select value={editForm.experience} onValueChange={(value) => setEditForm({...editForm, experience: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="请选择从业年限" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1年以下">1年以下</SelectItem>
                            <SelectItem value="1-3年">1-3年</SelectItem>
                            <SelectItem value="3-5年">3-5年</SelectItem>
                            <SelectItem value="5-10年">5-10年</SelectItem>
                            <SelectItem value="10年以上">10年以上</SelectItem>
                          </SelectContent>
                        </Select>
                      ) : (
                        <span>{userInfo.experience}</span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role">角色</Label>
                      {isEditing ? (
                        <Select value={editForm.role} onValueChange={(value) => setEditForm({...editForm, role: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="请选择角色" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="猎头顾问">猎头顾问</SelectItem>
                            <SelectItem value="HR">HR</SelectItem>
                            <SelectItem value="招聘专员">招聘专员</SelectItem>
                            <SelectItem value="其他">其他</SelectItem>
                          </SelectContent>
                        </Select>
                      ) : (
                        <span>{userInfo.role}</span>
                      )}
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="company">猎企公司</Label>
                      {isEditing ? (
                        <div className="flex space-x-2">
                          <Input
                            id="company"
                            value={editForm.company}
                            onChange={(e) => setEditForm({...editForm, company: e.target.value})}
                            placeholder="请输入公司名称"
                          />
                          <Button variant="outline">验证</Button>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span>{userInfo.company}</span>
                            <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                              <Check className="w-3 h-3 mr-1" />
                              已绑定
                            </Badge>
                          </div>
                          <div className="flex space-x-2 hidden">
                            <Button variant="outline" size="sm">该注公司法人</Button>
                            <Button variant="outline" size="sm">重新验证</Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 生态权益信息 */}
              <Card
                className="mt-6 relative overflow-hidden border-slate-200"
                style={{
                  background: 'linear-gradient(110.23deg, #e9dfff4d -7.58%, #e3f2ff4d 52.87%, #a5d4ff4d 115.88%)'
                }}
              >
                {/* 装饰背景元素 */}
                <div className="absolute inset-0 pointer-events-none">
                  <Sparkles className="absolute top-4 right-6 w-6 h-6 text-purple-300/30 transform rotate-12" />
                  <Award className="absolute top-12 right-16 w-8 h-8 text-blue-300/20 transform -rotate-12" />
                  <Star className="absolute bottom-6 right-8 w-5 h-5 text-blue-400/40 transform rotate-45" />
                  <Zap className="absolute bottom-12 left-6 w-7 h-7 text-purple-300/25 transform rotate-25" />
                  <Medal className="absolute top-8 left-8 w-6 h-6 text-blue-300/30 transform -rotate-25" />
                </div>

                <CardHeader className="relative z-10">
                  <CardTitle className="text-[16px] text-slate-800 font-bold">禾蛙生态用户公约</CardTitle>
                  <CardDescription className="text-slate-700/80">根据您的活跃度和贡献获得不同等级权益</CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="flex items-center space-x-4">
                    <Badge
                      variant="secondary"
                      className="text-sm px-3 py-1 bg-white/60 text-slate-700 border-slate-300 cursor-pointer hover:bg-white hover:text-[#20BFA9] hover:border-[#20BFA9] transition-all duration-300"
                      onClick={() => openDocumentDialog('sender', '蛙生态发单方公约')}
                    >
                      未蛙生态发单方公约
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-sm px-3 py-1 bg-white/60 text-slate-700 border-slate-300 cursor-pointer hover:bg-white hover:text-[#20BFA9] hover:border-[#20BFA9] transition-all duration-300"
                      onClick={() => openDocumentDialog('receiver', '蛙生态接单方公约')}
                    >
                      未蛙生态接单方公约
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* 测试按钮 - 在Card外面 */}
              <div className="mt-4">
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  测试按钮
                </Button>
              </div>
            </>
          )}

          {/* 用户名片 */}
          {activeMenuItem === 'user-card' && (
            <div className="space-y-8">
              {/* 名片头部 - 优化间距和布局 */}
              <Card className="shadow-sm">
                <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6">
                  <div className="space-y-1">
                    <CardTitle className="text-[18px] text-gray-900">个人名片</CardTitle>
                    <CardDescription className="text-gray-600">展示您的专业形象和能力数据</CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button variant="outline" className="text-[#20BFA9] border-[#20BFA9] hover:bg-[#20BFA9] hover:text-white transition-all duration-200">
                      <Eye className="w-4 h-4 mr-2" />
                      预览名片
                    </Button>
                    <Button variant="outline" className="hover:border-[#20BFA9] hover:text-[#20BFA9] transition-all duration-200">
                      <Edit className="w-4 h-4 mr-2" />
                      编辑名片
                    </Button>
                  </div>
                </CardHeader>
              </Card>

              {/* 名片内容 - 优化响应式布局 */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* 左侧个人信息 - 改进移动端体验 */}
                <div className="xl:col-span-1">
                  <Card className="shadow-sm border-gray-200">
                    <CardContent className="p-8 space-y-8">
                      {/* 头像和基本信息 - 增强视觉层次 */}
                      <div className="flex flex-col items-center text-center space-y-6">
                        <div className="relative group">
                          <Avatar className="w-24 h-24 ring-4 ring-gray-100 shadow-lg">
                            <AvatarImage src="/api/placeholder/96/96" className="object-cover" />
                            <AvatarFallback className="text-2xl bg-gradient-to-br from-[#20BFA9] to-[#16A085] text-white">张</AvatarFallback>
                          </Avatar>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold text-gray-900">张原问</h3>
                          <div className="flex items-center justify-center space-x-2">

                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* 详细信息 - 改进信息展示 */}
                      <div className="space-y-5">
                        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 text-sm">称呼</span>
                            <span className="font-medium text-gray-900">张原问</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 text-sm">从业年限</span>
                            <span className="font-medium text-gray-900">5-10年</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 text-sm">活跃状态</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-green-600 text-sm font-medium">在线</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* 名片类型切换 - 改进样式 */}
                      <Tabs defaultValue="receiver" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1">
                          <TabsTrigger
                            value="receiver"
                            className="text-sm data-[state=active]:bg-[#20BFA9] data-[state=active]:text-white data-[state=active]:shadow-sm transition-all duration-200"
                          >
                            接单方名片
                          </TabsTrigger>
                          <TabsTrigger
                            value="sender"
                            className="text-sm data-[state=active]:bg-[#20BFA9] data-[state=active]:text-white data-[state=active]:shadow-sm transition-all duration-200"
                          >
                            发单方名片
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>

                      <Separator />

                      {/* 业务信息 - 重新设计信息展示 */}
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center py-2">
                            <span className="text-gray-600 text-sm">未接接单</span>
                            <span className="font-semibold text-lg text-[#20BFA9]">52个月</span>
                          </div>
                          <div className="flex justify-between items-center py-2">
                            <span className="text-gray-600 text-sm">做单偏好</span>
                            <Badge variant="outline" className="text-[#20BFA9] border-[#20BFA9] bg-[#20BFA9]/5">
                              猎头
                            </Badge>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-sm font-medium text-gray-900">擅长行业</h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700 border-blue-200">电子商务</Badge>
                            <Badge variant="secondary" className="text-xs bg-green-50 text-green-700 border-green-200">电子技术</Badge>
                            <Badge variant="secondary" className="text-xs bg-purple-50 text-purple-700 border-purple-200">广告营销</Badge>
                            <Badge variant="secondary" className="text-xs bg-orange-50 text-orange-700 border-orange-200">产业互联网</Badge>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-sm font-medium text-gray-900">个人介绍</h4>
                          <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg italic">
                            "专注于技术类职位招聘，具有丰富的候选人资源和行业洞察力。擅长中高端技术人才的精准匹配。"
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* 右侧表现数据 - 优化数据展示区域 */}
                <div className="xl:col-span-2">
                  <Card className="shadow-sm border-gray-200">
                    <CardHeader className="pb-6">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-[18px] flex items-center text-gray-900">
                          <BarChart className="w-5 h-5 mr-3 text-[#20BFA9]" />
                          我的表现数据
                        </CardTitle>
                        <Badge variant="outline" className="text-xs text-gray-600 border-gray-300">
                          近6个月
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      {/* 数据指标 - 重新设计数据卡片 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-center justify-between mb-2">
                            <div className="p-2 bg-blue-500 rounded-lg">
                              <TrendingUp className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-xs text-blue-600 bg-blue-200 px-2 py-1 rounded-full">+2.3%</span>
                          </div>
                          <div className="text-3xl font-bold text-blue-700 mb-1">68.80%</div>
                          <div className="text-sm text-blue-600 font-medium">接单推荐率</div>
                        </div>

                        <div className="group relative bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-center justify-between mb-2">
                            <div className="p-2 bg-green-500 rounded-lg">
                              <Target className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-xs text-green-600 bg-green-200 px-2 py-1 rounded-full">+5.1%</span>
                          </div>
                          <div className="text-3xl font-bold text-green-700 mb-1">58.00%</div>
                          <div className="text-sm text-green-600 font-medium">推荐过筛率</div>
                        </div>

                        <div className="group relative bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-center justify-between mb-2">
                            <div className="p-2 bg-purple-500 rounded-lg">
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-xs text-purple-600 bg-purple-200 px-2 py-1 rounded-full">+1.2%</span>
                          </div>
                          <div className="text-3xl font-bold text-purple-700 mb-1">13.80%</div>
                          <div className="text-sm text-purple-600 font-medium">过筛简历offer率</div>
                        </div>

                        <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-center justify-between mb-2">
                            <div className="p-2 bg-orange-500 rounded-lg">
                              <Award className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-xs text-orange-600 bg-orange-200 px-2 py-1 rounded-full">+3</span>
                          </div>
                          <div className="text-3xl font-bold text-orange-700 mb-1">4个</div>
                          <div className="text-sm text-orange-600 font-medium">历史offer</div>
                        </div>
                      </div>

                      <Separator />

                      {/* 最近成单信息 - 改进展示方式 */}
                      <div className="bg-gradient-to-r from-[#20BFA9]/5 to-blue-50 p-6 rounded-xl border border-[#20BFA9]/20">
                        <h4 className="font-semibold mb-4 flex items-center text-gray-900">
                          <div className="p-2 bg-[#20BFA9] rounded-lg mr-3">
                            <Star className="w-4 h-4 text-white" />
                          </div>
                          最近成单记录
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">行业领域</span>
                            <Badge variant="outline" className="text-[#20BFA9] border-[#20BFA9] bg-white">
                              电子技术
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">职能方向</span>
                            <Badge variant="outline" className="text-blue-600 border-blue-600 bg-white">
                              测试工程师
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">成单时间</span>
                            <span className="text-sm font-medium text-gray-900">3天前</span>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* 图表区域 - 改进图表设计和响应式布局 */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* 历史offer产出行业分布 */}
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                          <h4 className="font-semibold mb-6 flex items-center text-gray-900">
                            <div className="p-2 bg-[#20BFA9] rounded-lg mr-3">
                              <PieChart className="w-4 h-4 text-white" />
                            </div>
                            行业���布统计
                          </h4>
                          <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4">
                            {/* 改进的饼图设计 */}
                            <div className="flex items-center justify-center h-full">
                              <div className="relative w-40 h-40">
                                <svg className="w-40 h-40 transform -rotate-90 drop-shadow-sm" viewBox="0 0 100 100">
                                  {/* 电子商务 - 绿色 */}
                                  <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="transparent"
                                    stroke="#20BFA9"
                                    strokeWidth="16"
                                    strokeDasharray="75.4 251.2"
                                    strokeDashoffset="0"
                                    className="hover:stroke-[#1BA592] transition-colors duration-200"
                                  />
                                  {/* 电子技术 - 蓝色 */}
                                  <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="transparent"
                                    stroke="#3B82F6"
                                    strokeWidth="16"
                                    strokeDasharray="62.8 251.2"
                                    strokeDashoffset="-75.4"
                                    className="hover:stroke-[#2563EB] transition-colors duration-200"
                                  />
                                  {/* 广告营销 - 橙色 */}
                                  <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="transparent"
                                    stroke="#F97316"
                                    strokeWidth="16"
                                    strokeDasharray="50.2 251.2"
                                    strokeDashoffset="-138.2"
                                    className="hover:stroke-[#EA580C] transition-colors duration-200"
                                  />
                                </svg>
                                {/* 中心显示总数 */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">12</div>
                                    <div className="text-xs text-gray-600">总offer</div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* 改进的图例布局 */}
                            <div className="mt-6 space-y-3">
                              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                                <div className="flex items-center space-x-3">
                                  <div className="w-4 h-4 bg-[#20BFA9] rounded-full"></div>
                                  <span className="text-sm font-medium text-gray-900">电子商务</span>
                                </div>
                                <div className="text-right">
                                  <div className="text-sm font-semibold text-gray-900">5个</div>
                                  <div className="text-xs text-gray-600">41.7%</div>
                                </div>
                              </div>
                              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                                <div className="flex items-center space-x-3">
                                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                                  <span className="text-sm font-medium text-gray-900">电子技术</span>
                                </div>
                                <div className="text-right">
                                  <div className="text-sm font-semibold text-gray-900">4个</div>
                                  <div className="text-xs text-gray-600">33.3%</div>
                                </div>
                              </div>
                              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                                <div className="flex items-center space-x-3">
                                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                                  <span className="text-sm font-medium text-gray-900">广告营销</span>
                                </div>
                                <div className="text-right">
                                  <div className="text-sm font-semibold text-gray-900">3个</div>
                                  <div className="text-xs text-gray-600">25.0%</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* 历史offer产出岗位分布 */}
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                          <h4 className="font-semibold mb-6 flex items-center text-gray-900">
                            <div className="p-2 bg-[#20BFA9] rounded-lg mr-3">
                              <Briefcase className="w-4 h-4 text-white" />
                            </div>
                            岗位分布统计
                          </h4>
                          <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4">
                            {/* 改进的饼图设计 */}
                            <div className="flex items-center justify-center h-full">
                              <div className="relative w-40 h-40">
                                <svg className="w-40 h-40 transform -rotate-90 drop-shadow-sm" viewBox="0 0 100 100">
                                  {/* 产品经理 - 绿色 */}
                                  <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="transparent"
                                    stroke="#20BFA9"
                                    strokeWidth="16"
                                    strokeDasharray="87.9 251.2"
                                    strokeDashoffset="0"
                                    className="hover:stroke-[#1BA592] transition-colors duration-200"
                                  />
                                  {/* 区域销售经理 - 蓝色 */}
                                  <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="transparent"
                                    stroke="#3B82F6"
                                    strokeWidth="16"
                                    strokeDasharray="75.4 251.2"
                                    strokeDashoffset="-87.9"
                                    className="hover:stroke-[#2563EB] transition-colors duration-200"
                                  />
                                  {/* 测试工程师 - 紫色 */}
                                  <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="transparent"
                                    stroke="#8B5CF6"
                                    strokeWidth="16"
                                    strokeDasharray="62.8 251.2"
                                    strokeDashoffset="-163.3"
                                    className="hover:stroke-[#7C3AED] transition-colors duration-200"
                                  />
                                </svg>
                                {/* 中心显示总数 */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">12</div>
                                    <div className="text-xs text-gray-600">总岗位</div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* 改进的图例布局 */}
                            <div className="mt-6 space-y-3">
                              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                                <div className="flex items-center space-x-3">
                                  <div className="w-4 h-4 bg-[#20BFA9] rounded-full"></div>
                                  <span className="text-sm font-medium text-gray-900">产品经理</span>
                                </div>
                                <div className="text-right">
                                  <div className="text-sm font-semibold text-gray-900">5个</div>
                                  <div className="text-xs text-gray-600">41.7%</div>
                                </div>
                              </div>
                              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                                <div className="flex items-center space-x-3">
                                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                                  <span className="text-sm font-medium text-gray-900">销售经理</span>
                                </div>
                                <div className="text-right">
                                  <div className="text-sm font-semibold text-gray-900">4个</div>
                                  <div className="text-xs text-gray-600">33.3%</div>
                                </div>
                              </div>
                              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                                <div className="flex items-center space-x-3">
                                  <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                                  <span className="text-sm font-medium text-gray-900">测试工程师</span>
                                </div>
                                <div className="text-right">
                                  <div className="text-sm font-semibold text-gray-900">3个</div>
                                  <div className="text-xs text-gray-600">25.0%</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* 文档弹窗 */}
      <Dialog open={documentDialog.isOpen} onOpenChange={closeDocumentDialog}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <span>{documentDialog.title}</span>
            </DialogTitle>
            <DialogDescription>
              请仔细阅读以下用户公约条款
            </DialogDescription>
          </DialogHeader>

          <div className="prose prose-sm max-w-none mt-6">
            {documentDialog.type === 'sender' ? (
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">第一条 总则</h3>
                  <p className="text-gray-700 leading-relaxed">
                    为了规范禾蛙生态平台发单方的行为，保护各方合法权益，维护平台秩序，特制定本公约。
                    发单方应当遵守国家法律法规，遵循诚实信用原则，不得损害他人合法权益。
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">第二条 发单方义务</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>提供真实、准确、完整的职位信息和公司信息</li>
                    <li>确保发布的职位信息合法合规，不违反相关法律法规</li>
                    <li>及时更新职位状态，避免无效职位信息误导接单方</li>
                    <li>按照约定时间和标准支付服务费用</li>
                    <li>保护候选人隐私信息，不得泄露或滥用</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">第三条 禁止行为</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>发布虚假职位信息或过期职位信息</li>
                    <li>恶意拖延费用支付或拒绝支付合理费用</li>
                    <li>直接联系候选人绕过接单方</li>
                    <li>发布违法违规或有害信息</li>
                    <li>恶意评价或诋毁接单方声誉</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">第四条 违约责任</h3>
                  <p className="text-gray-700 leading-relaxed">
                    发单方违反本公约的，平台有权采取警告、限制功能、暂停服务、终止合作等措施。
                    造成他人损失的，应当承担相应的赔偿责任。
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">第五条 附则</h3>
                  <p className="text-gray-700 leading-relaxed">
                    本公约自发布之日起生效，平台保留对公约条款的最终解释权。
                    如有疑问，请联系平台客服。
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">第一条 总则</h3>
                  <p className="text-gray-700 leading-relaxed">
                    为了规范禾蛙生态平台接单方的行为，保护各方合法权益，维护平台秩序，特制定本公约。
                    接单方应当遵守国家法律法规，遵循诚实信用原则，提供专业优质的服务。
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">第二条 接单方义务</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>具备相应的专业能力和资质，能够胜任接单服务</li>
                    <li>及时响应发单方需求，按照约定时间完成服务</li>
                    <li>提供真实、有效的候选人信息和简历</li>
                    <li>保护候选人和发单方的商业机密和隐私信息</li>
                    <li>诚实申报服务进度，不隐瞒重要信息</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">第三条 服务标准</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>推荐的候选人应当符合职位要求</li>
                    <li>候选人简历信息真实有效，无造假行为</li>
                    <li>及时跟进候选人面试和入职情况</li>
                    <li>提供专业的咨询建议和服务支持</li>
                    <li>维护良好的职业形象和服务态度</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">第四条 禁止行为</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>提供虚假候选人信息或简历造假</li>
                    <li>恶意抢单或恶意竞争</li>
                    <li>泄露候选人或发单方的机密信息</li>
                    <li>绕过平台私下交易</li>
                    <li>恶意评价或诋毁发单方声誉</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">第五条 违约责任</h3>
                  <p className="text-gray-700 leading-relaxed">
                    接单方违反本公约的，平台有权采取警告、限制功能、暂停服务、终止合作等措施。
                    造成他人损失的，应当承担相应的赔偿责任。
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">第六条 附则</h3>
                  <p className="text-gray-700 leading-relaxed">
                    本公约自发布之日起生效，平台保留对公约条款的最终解释权。
                    如有疑问，请联系平台客服。
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-end mt-6 pt-4 border-t">
            <Button onClick={closeDocumentDialog} className="px-6">
              我已阅读
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProfileCenter;
