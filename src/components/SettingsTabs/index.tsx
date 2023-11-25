'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')
  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem
          value="tab0"
          isSelected={currentTab === 'tab0'}
          title="My details"
        />
        <TabItem
          value="tab1"
          isSelected={currentTab === 'tab1'}
          title="Profile"
        />
        <TabItem
          value="tab2"
          isSelected={currentTab === 'tab2'}
          title="Password"
        />
        <TabItem value="tab3" isSelected={currentTab === 'tab3'} title="Team" />
        <TabItem value="tab4" isSelected={currentTab === 'tab4'} title="Plan" />
        <TabItem
          value="tab5"
          isSelected={currentTab === 'tab5'}
          title="Billing"
        />
        <TabItem
          value="tab6"
          isSelected={currentTab === 'tab6'}
          title="Email"
        />
        <TabItem
          value="tab7"
          isSelected={currentTab === 'tab7'}
          title="Notifications"
        />
        <TabItem
          value="tab8"
          isSelected={currentTab === 'tab8'}
          title="Integrations"
        />
        <TabItem value="tab9" isSelected={currentTab === 'tab9'} title="API" />
      </Tabs.List>
    </Tabs.Root>
  )
}
