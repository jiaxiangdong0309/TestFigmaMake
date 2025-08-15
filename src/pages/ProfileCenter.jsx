import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import {  CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Avatar } from '@/components/ui/avatar';
import { BreadcrumbContainer, BreadcrumbItem, BreadcrumbSeparatorIcon } from '@/components/ui/breadcrumb';
import { SidebarContainer, SidebarContent, SidebarTitle, NavGroup, NavItem, SubNavItem, NavIcon, Divider } from '@/components/ui/Sidebar';
import { CardContainer, CardHeader, CardTitle, CardSubtitle } from '@/components/ui/card';


const ProfileCenter = () => {
  return (
    <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative size-full">
      {/* 左侧导航区域 */}
      <SidebarContainer>
        <SidebarContent>
          <SidebarTitle>个人中心</SidebarTitle>

          {/* 个人信息导航组 */}
          <NavGroup>
            <NavItem isActive={false} hasSubItems={true}>
              <div className="flex flex-row gap-[10.47px] items-center justify-start p-0 relative shrink-0">
                <div className="flex flex-col items-start justify-start p-0 relative shrink-0">
                  <div className="relative shrink-0 size-[14.04px]">
                    <NavIcon type="user" color="#20bfa9" size="14.04px" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start p-0 relative shrink-0">
                  <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#20bfa9] text-[14px] text-center text-nowrap">
                    <p className="block leading-[21px] whitespace-pre">个人信息</p>
                  </div>
                </div>
              </div>
            </NavItem>
            <div className="flex flex-col gap-[3.5px] items-start justify-start p-0 relative shrink-0 w-[161px]">
              <SubNavItem isActive={true}>基本信息</SubNavItem>
              <SubNavItem>用户名片</SubNavItem>
              <SubNavItem>做单偏好</SubNavItem>
              <SubNavItem>账号与安全</SubNavItem>
            </div>
          </NavGroup>

          {/* 蛙贝中心导航组 */}
          <NavGroup>
            <NavItem hasSubItems={true}>
              <div className="flex flex-row items-center justify-start p-0 relative shrink-0">
                <div className="flex flex-col items-start justify-start pl-0 pr-[10.5px] py-0 relative shrink-0">
                  <div className="relative shrink-0 size-3.5">
                    <NavIcon type="clock" color="#364153" size="14px" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start p-0 relative shrink-0">
                  <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px] text-center text-nowrap">
                    <p className="block leading-[21px] whitespace-pre">蛙贝中心</p>
                  </div>
                </div>
              </div>
            </NavItem>
            <div className="flex flex-col gap-[3.5px] items-start justify-start p-0 relative shrink-0 w-[161px]">
              <SubNavItem>蛙贝任务</SubNavItem>
              <SubNavItem>蛙贝商城</SubNavItem>
              <SubNavItem>用户等级</SubNavItem>
              <SubNavItem>邀请新用户</SubNavItem>
            </div>
          </NavGroup>

          {/* 活动中心导航组 */}
          <NavGroup>
            <NavItem hasSubItems={true}>
              <div className="flex flex-row items-center justify-start p-0 relative shrink-0">
                <div className="flex flex-col items-start justify-start pl-0 pr-[10.5px] py-0 relative shrink-0">
                  <div className="relative shrink-0 size-3.5">
                    <NavIcon type="star" color="#364153" size="14px" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start p-0 relative shrink-0">
                  <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px] text-center text-nowrap">
                    <p className="block leading-[21px] whitespace-pre">活动中心</p>
                  </div>
                </div>
              </div>
            </NavItem>
            <div className="flex flex-col gap-[3.5px] items-start justify-start p-0 relative shrink-0 w-[161px]">
              <SubNavItem>禾蛙活动</SubNavItem>
            </div>
          </NavGroup>

          {/* 信用中心导航组 */}
          <NavGroup>
            <NavItem hasSubItems={true}>
              <div className="flex flex-row items-center justify-start p-0 relative shrink-0">
                <div className="flex flex-col items-start justify-start pl-0 pr-[10.5px] py-0 relative shrink-0">
                  <div className="relative shrink-0 size-3.5">
                    <NavIcon type="lightning" color="#364153" size="14px" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start p-0 relative shrink-0">
                  <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px] text-center text-nowrap">
                    <p className="block leading-[21px] whitespace-pre">信用中心</p>
                  </div>
                </div>
              </div>
            </NavItem>
            <div className="flex flex-col gap-[3.5px] items-start justify-start p-0 relative shrink-0 w-[161px]">
              <SubNavItem>个人信用分</SubNavItem>
              <SubNavItem>企业信用分</SubNavItem>
            </div>
          </NavGroup>

          {/* 收藏管理导航组 */}
          <NavGroup>
            <NavItem hasSubItems={true}>
              <div className="flex flex-row items-center justify-start p-0 relative shrink-0">
                <div className="flex flex-col items-start justify-start pl-0 pr-[10.5px] py-0 relative shrink-0">
                  <div className="relative shrink-0 size-3.5">
                    <NavIcon type="bookmark" color="#364153" size="14px" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start p-0 relative shrink-0">
                  <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px] text-center text-nowrap">
                    <p className="block leading-[21px] whitespace-pre">收藏管理</p>
                  </div>
                </div>
              </div>
            </NavItem>
            <div className="flex flex-col gap-[3.5px] items-start justify-start p-0 relative shrink-0 w-[161px]">
              <SubNavItem>职位收藏</SubNavItem>
            </div>
          </NavGroup>

          {/* 评价管理导航组 */}
          <NavGroup>
            <NavItem hasSubItems={true}>
              <div className="flex flex-row items-center justify-start p-0 relative shrink-0">
                <div className="flex flex-col items-start justify-start pl-0 pr-[10.5px] py-0 relative shrink-0">
                  <div className="relative shrink-0 size-3.5">
                    <NavIcon type="document" color="#364153" size="14px" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start p-0 relative shrink-0">
                  <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px] text-center text-nowrap">
                    <p className="block leading-[21px] whitespace-pre">评价管理</p>
                  </div>
                </div>
              </div>
            </NavItem>
            <div className="flex flex-col gap-[3.5px] items-start justify-start p-0 relative shrink-0 w-[161px]">
              <SubNavItem>待评价列表</SubNavItem>
              <SubNavItem>已评价列表</SubNavItem>
            </div>
          </NavGroup>

          {/* 消息通知导航组 */}
          <NavGroup>
            <NavItem hasSubItems={true}>
              <div className="flex flex-row items-center justify-start p-0 relative shrink-0">
                <div className="flex flex-col items-start justify-start pl-0 pr-[10.5px] py-0 relative shrink-0">
                  <div className="relative shrink-0 size-3.5">
                    <NavIcon type="bell" color="#364153" size="14px" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start p-0 relative shrink-0">
                  <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px] text-center text-nowrap">
                    <p className="block leading-[21px] whitespace-pre">消息通知</p>
                  </div>
                </div>
              </div>
            </NavItem>
            <div className="flex flex-col gap-[3.5px] items-start justify-start p-0 relative shrink-0 w-[161px]">
              <SubNavItem>消息通知</SubNavItem>
            </div>
          </NavGroup>

          <Divider />

          {/* 退出登录 */}
          <div className="flex flex-row items-center justify-start pb-[7px] pt-[17.5px] px-[10.5px] relative rounded-[8.75px] shrink-0 w-full">
            <div className="flex flex-col items-start justify-start pl-0 pr-[10.5px] py-0 relative shrink-0">
              <div className="relative shrink-0 size-3.5">
                <NavIcon type="logout" color="#E7000B" size="14px" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start p-0 relative shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e7000b] text-[14px] text-center text-nowrap">
                <p className="block leading-[21px] whitespace-pre">退出登录</p>
              </div>
            </div>
          </div>
        </SidebarContent>
      </SidebarContainer>

      {/* 右侧主内容区域 */}
      <MainContainer>
        {/* 面包屑导航 */}
        <BreadcrumbContainer>
          {/* <BreadcrumbItem>个人中心</BreadcrumbItem>
          <BreadcrumbSeparatorIcon />
          <BreadcrumbItem>个人信息</BreadcrumbItem>
          <BreadcrumbSeparatorIcon />
          <BreadcrumbItem isActive={true}>基本信息</BreadcrumbItem> */}
        </BreadcrumbContainer>

        {/* 基本信息卡片 */}
        <CardContainer>
          <CardHeader>
            <div>
              <CardTitle>基本信息</CardTitle>
              <CardSubtitle>管理你的个人基本信息</CardSubtitle>
            </div>
            <div className="flex flex-row items-start justify-start p-0 relative shrink-0">
              <div className="flex flex-col h-[31.5px] items-start justify-start pl-0 pr-[7px] py-0 relative shrink-0">
                <Button>
                  <div className="flex flex-col h-3.5 items-start justify-start pl-0 pr-[7px] py-0 relative shrink-0 w-[21px]">
                    <div className="flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-3.5">
                      <UnbindIcon color="#0A0A0A" size="14px" />
                    </div>
                  </div>
                  <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12.3px] text-center text-neutral-950 text-nowrap">
                    <p className="block leading-[17.5px] whitespace-pre">解绑猎企</p>
                  </div>
                </Button>
              </div>
              <Button>
                <div className="flex flex-col h-3.5 items-start justify-start pl-0 pr-[7px] py-0 relative shrink-0 w-[21px]">
                  <div className="flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-3.5">
                    <EditIcon color="#0A0A0A" size="14px" />
                  </div>
                </div>
                <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12.3px] text-center text-neutral-950 text-nowrap">
                  <p className="block leading-[17.5px] whitespace-pre">编辑</p>
                </div>
              </Button>
            </div>
          </CardHeader>

          <CardContent>
            {/* 用户头像和基本信息 */}
            <div className="flex flex-row isolate items-center justify-start p-0 relative shrink-0 w-full">
              <div className="flex flex-col items-start justify-start pl-0 pr-3.5 py-0 relative shrink-0 z-[2]">
                <Avatar>张</Avatar>
              </div>
              <div className="flex flex-col items-start justify-start p-0 relative shrink-0 z-[1]">
                <div className="flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-950 text-nowrap">
                    <p className="block leading-[21px] whitespace-pre">张三丰</p>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#717182] text-[12.3px] text-left text-nowrap">
                    <p className="block leading-[17.5px] whitespace-pre">猎头顾问</p>
                  </div>
                </div>
              </div>
            </div>

            <Divider />

            {/* 详细信息表单 */}
            <div className="h-56 relative shrink-0 w-full">
              {/* 真实姓名 */}
              <div className="absolute left-0 p-0 right-[755.5px] top-[-0.75px]">
                <div className="flex flex-col gap-[7px] items-start justify-start p-0 relative shrink-0 w-full">
                  <Label>真实姓名</Label>
                  <div className="flex flex-row items-center justify-start p-0 relative shrink-0 w-full">
                    <div className="flex flex-col items-start justify-start pl-0 pr-[7px] py-0 relative shrink-0">
                      <Value>张三丰</Value>
                    </div>
                    <StatusTag variant="default">已认证</StatusTag>
                  </div>
                </div>
              </div>

              {/* 昵称 */}
              <div className="absolute left-[755.5px] p-0 right-0 top-[-0.75px]">
                <div className="flex flex-col gap-[6.75px] items-start justify-start p-0 relative shrink-0 w-full">
                  <Label>昵称</Label>
                  <Value>功夫达人</Value>
                </div>
              </div>

              {/* 性别 */}
              <div className="absolute left-0 p-0 right-[755.5px] top-[60.5px]">
                <div className="flex flex-col gap-[6.75px] items-start justify-start p-0 relative shrink-0 w-full">
                  <Label>性别</Label>
                  <Value>未知</Value>
                </div>
              </div>

              {/* 从业年限 */}
              <div className="absolute left-[755.5px] p-0 right-0 top-[60.5px]">
                <div className="flex flex-col gap-[6.75px] items-start justify-start p-0 relative shrink-0 w-full">
                  <Label>从业年限</Label>
                  <Value>未知</Value>
                </div>
              </div>

              {/* 角色 */}
              <div className="absolute left-0 p-0 right-[755.5px] top-[121.75px]">
                <div className="flex flex-col gap-[6.75px] items-start justify-start p-0 relative shrink-0 w-full">
                  <Label>角色</Label>
                  <Value>猎头顾问</Value>
                </div>
              </div>

              {/* 猎企公司 */}
              <div className="absolute left-0 p-0 right-0 top-[183px]">
                <div className="flex flex-col gap-[7px] items-start justify-start p-0 relative shrink-0 w-full">
                  <Label>猎企公司</Label>
                  <div className="flex flex-row items-center justify-start p-0 relative shrink-0 w-full">
                    <div className="flex flex-row items-center justify-start p-0 relative shrink-0">
                      <div className="flex flex-col items-start justify-start pl-0 pr-[7px] py-0 relative shrink-0">
                        <Value>北京科技集团人力资源股份有限公司</Value>
                      </div>
                      <div className="bg-green-50 relative rounded-[6.75px] shrink-0">
                        <div className="flex flex-row gap-[3.5px] items-center justify-center overflow-clip px-2 py-[2.75px] relative">
                          <div className="flex flex-col h-[10.5px] items-start justify-start pl-0 pr-[3.5px] py-0 relative shrink-0 w-3.5">
                            <SuccessIcon color="#00A63E" size="10.5px" />
                          </div>
                          <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#00a63e] text-[10.5px] text-center text-nowrap">
                            <p className="block leading-[14px] whitespace-pre">已绑定</p>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </CardContainer>

        {/* 禾蛙生态用户公约卡片 */}
        <div className="bg-slate-50 relative rounded-[12.75px] shrink-0 w-full">
          <div className="box-border content-stretch flex flex-col gap-[21px] items-start justify-start overflow-clip p-px relative w-full">
            {/* 装饰性背景元素占位符 */}
            <div className="absolute inset-px">
              <div className="absolute flex h-[24.907px] items-center justify-center right-[19.05px] top-[12.05px] w-[24.907px]">
                <div className="w-6 h-6 bg-purple-200 rounded opacity-30"></div>
              </div>
              <div className="absolute flex h-[33.21px] items-center justify-center right-[53.39px] top-[39.4px] w-[33.21px]">
                <div className="w-7 h-7 bg-blue-200 rounded opacity-20"></div>
              </div>
              <div className="absolute bottom-[17.87px] flex h-[24.749px] items-center justify-center right-[24.38px] w-[24.749px]">
                <div className="w-[17.5px] h-[17.5px] bg-blue-400 rounded opacity-40"></div>
              </div>
              <div className="absolute bottom-[38.47px] flex h-[32.559px] items-center justify-center left-[16.97px] w-[32.559px]">
                <div className="w-[24.5px] h-[24.5px] bg-purple-200 rounded opacity-25"></div>
              </div>
              <div className="absolute flex h-[27.907px] items-center justify-center left-[24.55px] top-[24.55px] w-[27.907px]">
                <div className="w-[21px] h-[21px] bg-blue-200 rounded opacity-30"></div>
              </div>
            </div>

            <div className="flex flex-col gap-[5.25px] items-start justify-start pb-0 pt-[21px] px-[21px] relative shrink-0 w-full">
              <div className="flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1d293d] text-[16px] text-left w-full">
                  <p className="block leading-[24px]">禾蛙生态用户公约</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(49,65,88,0.8)] text-left w-full">
                  <p className="block leading-[21px]">根据您的活跃度和贡献获得不同等级权益</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start pb-[21px] pt-0 px-[21px] relative shrink-0 w-full">
              <div className="flex flex-row items-center justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col items-start justify-start pl-0 pr-3.5 py-0 relative shrink-0">
                  <ConventionTag>未蛙生态发单方公约</ConventionTag>
                </div>
                <ConventionTag>未蛙生态接单方公约</ConventionTag>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[12.75px]" />
        </div>
      </MainContainer>
    </div>
  );
};

export default ProfileCenter;
