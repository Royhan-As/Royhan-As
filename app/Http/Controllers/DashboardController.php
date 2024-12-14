<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\View\View;

class DashboardController extends Controller
{
    /**
     * Menampilkan halaman dashboard
     */
    public function index(): View
    {
        return view('dashboard', [
            // Anda bisa menambahkan data tambahan yang ingin ditampilkan di dashboard
            // Misalnya:
            // 'user' => auth()->user(),
            // 'recentActivities' => $recentActivities
        ]);
    }

    /**
     * Contoh metode untuk menangani aksi di dashboard
     */
    public function someAction(Request $request)
    {
        // Logika bisnis untuk aksi tertentu di dashboard
        
        // Contoh redirect dengan pesan flash
        return redirect()->route('dashboard')->with('success', 'Aksi berhasil dilakukan');
    }
}