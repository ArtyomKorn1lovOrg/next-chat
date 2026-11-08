<?php

namespace Package\User;

use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class UserServiceProvider extends PackageServiceProvider
{
    public function packageRegistered(): void
    {
    }

    public function packageBooted(): void
    {
    }

    public function configurePackage(Package $package): void
    {
        $package
            ->name('user')
            ->hasConfigFile()
            ->discoversMigrations()
            ->runsMigrations();
    }
}
