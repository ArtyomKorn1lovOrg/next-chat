<?php

namespace Package\Shared;

use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class SharedServiceProvider extends PackageServiceProvider
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
            ->name('shared')
            ->hasConfigFile()
            ->discoversMigrations()
            ->runsMigrations();
    }
}
