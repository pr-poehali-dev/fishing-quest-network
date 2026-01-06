import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  const mockPosts = [
    {
      id: 1,
      user: { name: 'Алексей Р.', avatar: '', rating: 2450 },
      type: 'fish',
      title: 'Щука 8.5 кг на спиннинг',
      location: 'Волга, район Твери',
      image: '',
      likes: 142,
      comments: 28,
      time: '2 часа назад',
      coordinates: { lat: 56.8587, lng: 35.9176 }
    },
    {
      id: 2,
      user: { name: 'Мария К.', avatar: '', rating: 3120 },
      type: 'treasure',
      title: 'Монета Екатерины II',
      location: 'Подмосковье, поле у деревни',
      image: '',
      likes: 267,
      comments: 54,
      time: '5 часов назад',
      coordinates: { lat: 55.7558, lng: 37.6173 }
    },
    {
      id: 3,
      user: { name: 'Дмитрий В.', avatar: '', rating: 1890 },
      type: 'fish',
      title: 'Карп 12 кг - трофей сезона!',
      location: 'Озеро Селигер',
      image: '',
      likes: 198,
      comments: 42,
      time: '1 день назад',
      coordinates: { lat: 57.4855, lng: 33.2503 }
    }
  ];

  const topUsers = [
    { name: 'Мария К.', rating: 3120, badge: '🥇', catches: 156 },
    { name: 'Алексей Р.', rating: 2450, badge: '🥈', catches: 98 },
    { name: 'Дмитрий В.', rating: 1890, badge: '🥉', catches: 67 }
  ];

  const upcomingEvents = [
    { title: 'Чемпионат по ловле щуки', date: '15 янв', participants: 45 },
    { title: 'Коп-встреча в Московской области', date: '22 янв', participants: 28 },
    { title: 'Зимняя рыбалка на Селигере', date: '29 янв', participants: 62 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-2xl">🎣⚒️</div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                РыбаКоп
              </h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <Button variant="ghost" onClick={() => setActiveTab('feed')}>
                <Icon name="Home" className="mr-2 h-4 w-4" />
                Лента
              </Button>
              <Button variant="ghost" onClick={() => setActiveTab('profile')}>
                <Icon name="User" className="mr-2 h-4 w-4" />
                Профиль
              </Button>
              <Button variant="ghost" onClick={() => setActiveTab('map')}>
                <Icon name="Map" className="mr-2 h-4 w-4" />
                Карта
              </Button>
              <Button variant="ghost" onClick={() => setActiveTab('communities')}>
                <Icon name="Users" className="mr-2 h-4 w-4" />
                Сообщества
              </Button>
              <Button variant="ghost" onClick={() => setActiveTab('rating')}>
                <Icon name="Trophy" className="mr-2 h-4 w-4" />
                Рейтинг
              </Button>
            </nav>

            <div className="flex items-center gap-2">
              <Button size="icon" variant="ghost">
                <Icon name="MessageCircle" className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Icon name="Bell" className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 md:hidden">
            <TabsTrigger value="feed">Лента</TabsTrigger>
            <TabsTrigger value="map">Карта</TabsTrigger>
            <TabsTrigger value="profile">Я</TabsTrigger>
            <TabsTrigger value="communities">Клубы</TabsTrigger>
            <TabsTrigger value="rating">Топ</TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex gap-3">
                      <Avatar>
                        <AvatarFallback>Вы</AvatarFallback>
                      </Avatar>
                      <Button variant="outline" className="flex-1 justify-start text-muted-foreground">
                        Поделитесь своим уловом или находкой...
                      </Button>
                      <Button>
                        <Icon name="ImagePlus" className="mr-2 h-4 w-4" />
                        Фото
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {mockPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-semibold">{post.user.name}</p>
                              <Badge variant="secondary" className="text-xs">
                                {post.user.rating} ⭐
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{post.time}</p>
                          </div>
                        </div>
                        <Badge variant={post.type === 'fish' ? 'default' : 'outline'}>
                          {post.type === 'fish' ? '🐟 Улов' : '⚒️ Находка'}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="MapPin" className="h-4 w-4" />
                          <span>{post.location}</span>
                        </div>
                      </div>
                      
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center text-6xl">
                        {post.type === 'fish' ? '🐟' : '🪙'}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex gap-4">
                          <Button variant="ghost" size="sm">
                            <Icon name="Heart" className="mr-2 h-4 w-4" />
                            {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                            {post.comments}
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => {
                              setActiveTab('map');
                              setSelectedLocation(post.id);
                            }}
                          >
                            <Icon name="MapPin" className="mr-2 h-4 w-4" />
                            На карте
                          </Button>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Icon name="Share2" className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Trophy" className="h-5 w-5 text-accent" />
                      Топ рыбаков недели
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {topUsers.map((user, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{user.badge}</span>
                          <div>
                            <p className="font-semibold">{user.name}</p>
                            <p className="text-sm text-muted-foreground">{user.catches} записей</p>
                          </div>
                        </div>
                        <Badge variant="secondary">{user.rating}</Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Calendar" className="h-5 w-5 text-primary" />
                      События
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="p-3 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                        <p className="font-semibold mb-1">{event.title}</p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="Calendar" className="h-3 w-3" />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Users" className="h-3 w-3" />
                            {event.participants}
                          </span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="map" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Icon name="Map" className="h-5 w-5" />
                    Интерактивная карта находок
                  </span>
                  <div className="flex gap-2">
                    <Badge variant="default" className="cursor-pointer">🐟 Уловы</Badge>
                    <Badge variant="outline" className="cursor-pointer">⚒️ Находки</Badge>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-lg border-2 border-dashed border-primary/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>
                  
                  <div className="relative z-10 space-y-4 text-center p-8">
                    <Icon name="MapPinned" className="h-16 w-16 mx-auto text-primary" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Карта мест уловов и находок</h3>
                      <p className="text-muted-foreground mb-4">
                        Здесь отображаются все локации с отмеченными уловами и находками сообщества
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                      {mockPosts.map((post) => (
                        <button
                          key={post.id}
                          onClick={() => setSelectedLocation(post.id)}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            selectedLocation === post.id 
                              ? 'border-primary bg-primary/10 shadow-lg scale-105' 
                              : 'border-border hover:border-primary/50 hover:shadow-md'
                          }`}
                        >
                          <div className="text-3xl mb-2">{post.type === 'fish' ? '🐟' : '⚒️'}</div>
                          <p className="text-sm font-semibold mb-1">{post.title.split(' ')[0]}</p>
                          <p className="text-xs text-muted-foreground">{post.location.split(',')[0]}</p>
                        </button>
                      ))}
                    </div>

                    {selectedLocation && (
                      <div className="mt-6 p-4 bg-card rounded-lg border shadow-lg max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4">
                        <p className="text-sm text-muted-foreground mb-2">Выбрана точка:</p>
                        <p className="font-bold">
                          {mockPosts.find(p => p.id === selectedLocation)?.title}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-4">
              {mockPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-3">{post.type === 'fish' ? '🐟' : '⚒️'}</div>
                    <h4 className="font-bold mb-2">{post.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Icon name="MapPin" className="h-3 w-3" />
                      <span>{post.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">{post.user.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{post.user.name}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <Avatar className="h-24 w-24">
                    <AvatarFallback className="text-3xl">АР</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold mb-1">Алексей Романов</h2>
                        <p className="text-muted-foreground">@alexfish</p>
                      </div>
                      <Button variant="outline">
                        <Icon name="Settings" className="mr-2 h-4 w-4" />
                        Настройки
                      </Button>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 rounded-lg bg-muted">
                        <p className="text-2xl font-bold text-primary">2450</p>
                        <p className="text-sm text-muted-foreground">Рейтинг</p>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-muted">
                        <p className="text-2xl font-bold text-secondary">98</p>
                        <p className="text-sm text-muted-foreground">Записей</p>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-muted">
                        <p className="text-2xl font-bold text-accent">45</p>
                        <p className="text-sm text-muted-foreground">Друзей</p>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-muted">
                        <p className="text-2xl font-bold">12</p>
                        <p className="text-sm text-muted-foreground">Клубов</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">🏆 Мастер спиннинга</Badge>
                      <Badge variant="secondary">🎣 100+ уловов</Badge>
                      <Badge variant="secondary">📍 Исследователь</Badge>
                      <Badge variant="secondary">⭐ Эксперт года</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Последние достижения</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg border text-center">
                    <div className="text-5xl mb-2">🥇</div>
                    <p className="font-bold">Трофейная щука</p>
                    <p className="text-sm text-muted-foreground">Поймана рыба весом более 8 кг</p>
                  </div>
                  <div className="p-4 rounded-lg border text-center">
                    <div className="text-5xl mb-2">📸</div>
                    <p className="font-bold">Фотограф</p>
                    <p className="text-sm text-muted-foreground">50 постов с фотографиями</p>
                  </div>
                  <div className="p-4 rounded-lg border text-center">
                    <div className="text-5xl mb-2">🗺️</div>
                    <p className="font-bold">Картограф</p>
                    <p className="text-sm text-muted-foreground">20 мест на карте</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="communities" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Мои сообщества</CardTitle>
                  <Button>
                    <Icon name="Plus" className="mr-2 h-4 w-4" />
                    Создать
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: 'Спиннингисты Москвы', members: 1247, icon: '🎣', posts: 342 },
                    { name: 'Кладоискатели России', members: 856, icon: '⚒️', posts: 219 },
                    { name: 'Зимняя рыбалка', members: 2103, icon: '❄️', posts: 567 },
                    { name: 'Находки древности', members: 634, icon: '🏺', posts: 156 }
                  ].map((community, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="text-5xl">{community.icon}</div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-2">{community.name}</h3>
                            <div className="flex gap-4 text-sm text-muted-foreground mb-3">
                              <span className="flex items-center gap-1">
                                <Icon name="Users" className="h-3 w-3" />
                                {community.members}
                              </span>
                              <span className="flex items-center gap-1">
                                <Icon name="FileText" className="h-3 w-3" />
                                {community.posts}
                              </span>
                            </div>
                            <Button variant="outline" size="sm" className="w-full">
                              Перейти
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rating" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" className="h-5 w-5 text-primary" />
                    Топ рыбаков
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {topUsers.map((user, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                        <div className="flex items-center gap-4">
                          <span className="text-3xl font-bold text-muted-foreground w-8">#{index + 1}</span>
                          <span className="text-2xl">{user.badge}</span>
                          <div>
                            <p className="font-bold">{user.name}</p>
                            <p className="text-sm text-muted-foreground">{user.catches} уловов</p>
                          </div>
                        </div>
                        <Badge variant="default" className="text-lg px-4 py-2">
                          {user.rating} ⭐
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Gem" className="h-5 w-5 text-accent" />
                    Топ находок
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { user: 'Мария К.', item: 'Монета Екатерины II', value: 3120 },
                      { user: 'Игорь С.', item: 'Старинный крест', value: 2890 },
                      { user: 'Елена П.', item: 'Пряжка XVIII века', value: 2450 }
                    ].map((entry, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                        <div className="flex items-center gap-4">
                          <span className="text-3xl font-bold text-muted-foreground w-8">#{index + 1}</span>
                          <div>
                            <p className="font-bold">{entry.item}</p>
                            <p className="text-sm text-muted-foreground">{entry.user}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-lg px-4 py-2">
                          {entry.value} ⭐
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
